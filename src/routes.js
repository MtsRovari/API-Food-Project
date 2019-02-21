const express = require('express');

const routes = express.Router();

const { ensureAuthenticated } = require('./config/auth');

//metodo de login
//metodo de cadastro com confirmação de senha

routes.get('/', (req, res) => res.send('/api para acessar'));

const User = require('./controller/users');

routes.get('/users', ensureAuthenticated, User.index);

routes.post('/auth/register', User.register);

routes.post('/auth/login', User.login);

routes.get('/users/profile/:id', ensureAuthenticated, User.profile);

routes.put('/users/profile/:id', ensureAuthenticated, User.profileEdit);

routes.get('/auth/logout', ensureAuthenticated,User.logout);

routes.delete('/users/:id', ensureAuthenticated,User.delete);


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

routes.get('/categories', ensureAuthenticated, Category.index);

routes.post('/categories', ensureAuthenticated, Category.create);

routes.delete('/categories/:id', ensureAuthenticated, Category.delete);


module.exports = routes;