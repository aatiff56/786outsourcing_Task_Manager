// declaration
const expres = require('express')
const routes = expres.Router()

// controllers
const users = require('../controllers/tasks/tasks')
routes.get('/tasks', users.getlist);
routes.get('/addtasks', users.addtasks);

module.exports = routes


