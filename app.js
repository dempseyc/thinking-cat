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

// i don't know what any of these thing mean  express.session methods? passing what obj lit?

app.use(clientSessions({
  secret: 'supersecretsecretstring',
  duration: 2 * 60 * 60 * 1000 //2-minute session
}));

let db = pgp('postgres://macbook@localhost:5432/catusers');

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
      bcrypt.compare(data.password, user.password_digest, function(err, cmp){
        if(cmp){
          req.session_state.user = user;
          console.log(req.session_state.user);
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
      res.render('signup/index', {errors:validErrors});// Render the form using error information
  }
  else {
    bcrypt
      .hash(data.password, 10, function(err, hash){
      db.none(
        "INSERT INTO cats (email, password_digest, catname) VALUES ($1, $2, $3)",
        [data.email, hash, data.catname]
      ).catch(function(e){
        console.log(`Failed to create user: ${e}`);
        let error = {msg: `Failed to create user: ${e}`}
        res.send(error);
      }).then(function(){
        res.render('index');
      });
    });
  }
});

app.post('/results', function(req,res){
  console.log("put call to results");
  console.log(req.session_state.user);
  if(req.session_state.user){
    let data = {
      "logged_in": true,
      "email": req.session_state.user.email,
      "catname": req.session_state.user.catname,
      "results": req.body.catdata
    };
    db.none(
        "UPDATE cats SET data = $1 WHERE email = $2",
        [data.results, data.email]
      ).catch(function(){
        res.send('Failed to update cat data.');
      }).then(function(){
        // res.send('cat updated');
        res.render('results/index', data);
      });
  } else {
    res.send('no req session_state user');
    res.end();
  }
});

app.get('/results', function(req,res){
  console.log("get call to results");
   res.render('results/index');
   // button hits results route without put and session_state seemingly
});

app.put('/user', function(req, res){
  db.none(
      "UPDATE cats SET email = $1 WHERE email = $2",
      [req.body.email, req.session_state.user.email]
    ).catch(function(){
      res.send('Failed to update user.');
    }).then(function(){
      res.send('User updated.');
    });
});

app.get('/logout', function(req, res){
  req.session_state.user = false;
  res.redirect('/');
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});