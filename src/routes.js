const express = require('express');

const routes = express.Router();

const { ensureAuthenticated } = require('./config/auth');

//metodo de login
//metodo de cadastro com confirmação de senha
const User = require('./controller/users');

routes.get('/users', ensureAuthenticated, User.index);

routes.get('/users/:id', User.view);

routes.post('/auth/login', User.login);

routes.get('/auth/logout', User.logout);

routes.post('/auth/register', User.register);

routes.put('/users/:id', User.edit);

routes.delete('/users/:id', User.delete);


const Restaurant = require('./controller/restaurants');

routes.get('/restaurants', Restaurant.index);

routes.get('/restaurants/:id', Restaurant.view);

routes.post('/restaurants', Restaurant.create);

routes.put('/restaurants/:id', Restaurant.edit);

routes.delete('/restaurants/:id', Restaurant.delete);


//validação de id de restaurante e categoria
const Product = require('./controller/products');

routes.get('/products', Product.index);

routes.get('/products/:id', Product.view);

routes.post('/products', Product.create);

routes.put('/products/:id', Product.edit);

routes.delete('/products/:id', Product.delete);


const Category = require('./controller/categories');

routes.get('/categories', Category.index);

routes.post('/categories', Category.create);

routes.delete('/categories/:id', Category.delete);


module.exports = routes;