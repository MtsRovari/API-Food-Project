const express = require('express');

const routes = express.Router();


const User = require('./controller/users');

routes.get('/users', User.index);

routes.get('/users/:id', User.view);

routes.post('/users', User.create);

routes.put('/users/:id', User.edit);

routes.delete('/users/:id', User.delete);

module.exports = routes;