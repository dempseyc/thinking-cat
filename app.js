const express = require('express');
const methodOverride = require('method-override');
const app = express();
const pgp = require('pg-promise')();
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const clientSessions = require("client-sessions");

const bcrypt = require('bcrypt');
const salt = bcrypt.genSalt(10);

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(methodOverride('_method'));

app.use(clientSessions({
  secret: 'supersecretsecretstring',
  duration: 2 * 60 * 60 * 1000 //2-minute session
}));

// need a workflow for this
// let db = pgp('postgres://macbook@localhost:5432/catusers');
let db = pgp('postgres://aroypkhgcwvrmc:db7f13095a44fbde72bb974b6b95aa347b5424e6a1ad349791b112a491303e9e@ec2-54-227-252-202.compute-1.amazonaws.com:5432/d2s5q3bo6f8him');

app.get('/', function(req, res){
  if(req.session_state.user){
    let data = {
      "logged_in": true,
      "email": req.session_state.user.email,
      "catname": req.session_state.user.catname,
      "catdata": ""
    };
    res.render('index', data);
    } else {
      res.render('index');
  }
});

app.post('/login', function(req, res){
  let data = req.body;
  let auth_error = "Invalid email/password";
  db
    .one("SELECT * FROM cats WHERE email = $1", [data.email])
    .catch(function(){
      res.send(auth_error);
    })
    .then(function(user){
      bcrypt
      .compare(data.password, user.password_digest, function(err, cmp){
        if(cmp){
          req.session_state.user = user;
          // console.log(req.session_state.user);
          res.redirect("/");
        } else {
          res.send(auth_error);
        }
      });
    });
});

app.get('/signup', function(req, res){
  res.render('signup/index');
});

app.get('/signup/error', function(req, res){
  res.render('signup/error');
});

app.post('/signup', function(req, res){
  let data = req.body;
  req.checkBody('email', 'Invalid email').notEmpty();
  req.checkBody('password', 'Invalid password').notEmpty();
  req.checkBody('catname', 'Invalid catname').notEmpty() ;
  req.sanitizeBody('email').escape();
  req.sanitizeBody('catname').escape();

  //return array of these objs {param: 'name', msg: 'Invalid name', value: '<received input>'}
  let validErrors = req.validationErrors();

  if (validErrors) {
      res.render('signup/index', {errors:validErrors});
  }
  else {
    bcrypt
      .hash(data.password, 10, function(err, hash){
      db
      .none(
        "INSERT INTO cats (email, password_digest, catname) VALUES ($1, $2, $3)",
        [data.email, hash, data.catname]
      )
      .catch(function(e){
        // console.log(`Failed to create user: ${e}`);
        let error = {msg: `Failed to create user: ${e}`}
        res.send(error);
      })
      .then(function(){
        res.render('index');
      });
    });
  }
});

app.post('/results', function(req,res){

  if(req.session_state.user){
    let data = {
      "logged_in": true,
      "email": req.session_state.user.email,
      "catname": req.session_state.user.catname,
      "catdata": req.body.catdata,
    };
    db
    .none(
        "UPDATE cats SET data = $1 WHERE email = $2",
        [data.catdata, data.email])
    .catch(function(){
        res.send('Failed to update cat data.');
    })
    .then(function(){
        res.render('results', data);
    })

  } else {
    res.end();
  }
});

// my internal api response is json to front end script
app.get('/results/results', function(req,res){
  if(req.session_state.user){
    let result_data = [{
    "logged_in": true,
    "email": req.session_state.user.email,
    "catname": req.session_state.user.catname
    }];
    let all_cat_array = [];
    db
    .many(
      "SELECT * from cats"
    )
    .catch(function(){
      res.send('did not capture mucho cat data.');
    })
    .then(function(cats){
      // console.log('db all captured', cats); // works
      console.log('cats length', cats.length);
      cats.forEach(cat => {
        let arr = cat.data.split(',');
        all_cat_array.push(arr);
      })
      result_data[0].all_cat_array = all_cat_array;

    })
    .then(function(){
      res.json(result_data);
      res.end();
    })
  } else {
    res.send('no user');
  }
});

// according to docs
// the right way to do it:  -- whatever this means!!??
// function goodCode(someData) {
//     someData = your array of objects for inserts;
//     return db.task(function (t) {
//         var queries = [];
//         someData.forEach(function (data) {
//             // querying against the task protocol:
//             queries.push(t.none('insert into...', data));
//         });
//         return t.batch(queries); // settles all queries;
//     });
// }

// don't have ui for this yet, so it might not work, and i don't care yet!
app.put('/user', function(req,res){
  db
    .none(
      "UPDATE cats SET email = $1 WHERE email = $2",
      [req.body.email, req.session_state.user.email]
    )
    .catch(function(){
      res.send('Failed to update user.');
    })
    .then(function(){
      res.send('User updated.');
    });
});

app.get('/logout', function(req, res){
  req.session_state.user = false;
  res.redirect('/');
});

// ta fucking da!
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
