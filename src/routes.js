const express = require('express');

const routes = express.Router();


const User = require('./controller/users');

routes.get('/users', User.index);

routes.get('/users/:id', User.view);

routes.post('/users', User.create);

routes.put('/users/:id', User.edit);

routes.delete('/users/:id', User.delete);


const Restaurant = require('./controller/restaurants');

routes.get('/restaurants', Restaurant.index);

routes.get('/restaurants/:id', Restaurant.view);

routes.post('/restaurants', Restaurant.create);

routes.put('/restaurants/:id', Restaurant.edit);

routes.delete('/restaurants/:id', Restaurant.delete);

module.exports = routes;