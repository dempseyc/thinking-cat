const express = require('express');
const app = express();
const pgp = require('pg-promise')();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const clientSessions = require("client-sessions");

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

app.use(clientSessions({
  resave: true,
  secret: 'supersecretsecretstring',
  duration: 2 * 60 * 60 * 1000 //2-minute session
}));

// need a workflow for this
let db = pgp('postgres://macbook@localhost:5432/catusers3');
// let db = pgp('postgres://aroypkhgcwvrmc:db7f13095a44fbde72bb974b6b95aa347b5424e6a1ad349791b112a491303e9e@ec2-54-227-252-202.compute-1.amazonaws.com:5432/d2s5q3bo6f8him');

app.get('/', function(req, res){

  if(req.session_state.user){
    let data = {
    "catname": req.session_state.user.catname,
    "catdata": ""
  };
    res.render('index', data);
  } else {
    res.render('register');
  }
});

app.get('/register', function(req, res){
  res.render('register/index');
});

app.get('/register/error', function(req, res){
  res.render('register/error');
});

app.post('/register', function(req, res){
  // this should get body form data
  let data = req.body;
  // console.log (data);
  req.checkBody('catname', 'Invalid catname').notEmpty() ;
  req.sanitizeBody('catname').escape();

  //return array of these objs {param: 'name', msg: 'Invalid name', value: '<received input>'}
  let validErrors = req.validationErrors();

  if (validErrors) {
      res.render('register/index', {errors:validErrors});
  }

  else {
    db
    .none(
      "INSERT INTO cats (catname) VALUES ($1)",
      [data.catname]
    )
    .catch(function(e){
      // console.log(`Failed to create user: ${e}`);
      let error = {msg: `Failed to create user: ${e}`}
      res.send(error);
    })
    .then(function(){
      req.session_state.user = {"catname": data.catname};
      res.render('index', data);
    });
  }
});

app.post('/results', function(req,res){
  if(req.session_state.user){
      let data = {
        "catname": req.session_state.user.catname,
        "catdata": req.body.catdata,
      };
    db
    .none(
        "UPDATE cats SET data = $1 WHERE catname = $2",
        [data.catdata, data.catname])
    .catch(function(){
        res.send('Failed to update cat data.');
    })
    .then(function(){
        res.render('results/index', data);
    });
  } else {
    console.log("no user");
    res.end();
  }
});

// my internal api is json to front end script at js/results.js
// d3 handles the json response

app.get('/results/results', function(req,res){
  if(req.session_state.user){
    let result_data = [{
    "catname": req.session_state.user.catname,
    "all_cat_array": []
    }];

    db
    .many(
      "SELECT * from cats"
    )
    .catch(function(){
      res.send('did not capture mucho cat data.');
    })
    .then(function(cats){
      console.log('cats length', cats.length);
      cats.forEach(cat => {
        let arr = cat.data.split(',');
        result_data[0].all_cat_array.push(arr);
      })
    })
    .then(function(){
      res.json(result_data);
      res.end();
    })
  } else {
    res.send('no user');
  }
});

app.get('/logout', function(req, res){
  req.session_state.user = false;
  res.redirect('/');
});

// ta fucking da!
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
