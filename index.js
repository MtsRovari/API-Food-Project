const express = require('express');

const session = require('express-session');

const mongoose = require('mongoose');

const requireDir = require('require-dir');

const passport = require('passport');

const app = express();

const db = require('./src/config/key').MongoURI;

// app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: 'passport-auth', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

mongoose.connect(db, { useNewUrlParser: true });

requireDir('./src/model');  

require('./src/config/passport')(passport);

app.use(passport.initialize());

app.use(passport.session());

app.use('/api', require('./src/routes'));

app.listen(3000);