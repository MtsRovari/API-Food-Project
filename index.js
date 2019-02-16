const express = require('express');

const mongoose = require('mongoose');

const requireDir = require('require-dir');

const passport = require('passport');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/food_project', { useNewUrlParser: true });

requireDir('./src/model');  

require('./src/config/passport')(passport);

app.use(passport.initialize());

app.use(passport.session());

app.use('/api', require('./src/routes'));

app.listen(3001);