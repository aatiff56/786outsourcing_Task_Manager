// declaration
const expres = require('express')
const routes = expres.Router()

// controllers
const users = require('../controllers/users/users')
routes.get('/login',users.login)
routes.post('/auth', users.login.auth);
routes.post('/users/edit/:id', users.update);
routes.post('/users/delete/:id', users.delete);
routes.get('/users', users.getlist);
routes.get('/addusers', users.addusers);

routes.get('/', users.login);
routes.get('/logout', users.logout);
module.exports = routes


