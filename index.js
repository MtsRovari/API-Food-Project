const express = require('express');

const mongoose = require('mongoose');

const requireDir = require('require-dir');

const passport = require('passport');

const app = express();

require('./src/config/passport')(passport);

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/food_project', { useNewUrlParser: true });

app.use(passport.initialize());

app.use(passport.session());

requireDir('./src/model');  

app.use('/api', require('./src/routes'));

app.listen(3001);