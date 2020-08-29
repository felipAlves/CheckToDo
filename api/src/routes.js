const express = require('express')
const routes = express.Router()

const authMiddleware = require('./middlewares/auth')

// controllers

const UserController = require('./controllers/UserController')
const ListController = require('./controllers/ListController')
const ToDoController = require('./controllers/ToDoController')

// Rotas

routes.post('/register', UserController.register)
routes.post('/logon', UserController.logon)

// Rotas que necessitam de autenticação

routes.use(authMiddleware)

routes.post('/list', ListController.create)
routes.get('/list', ListController.index)
routes.delete('/list/:id', ListController.delete)

routes.post('/todo', ToDoController.create)
routes.get('/todo', ToDoController.index)




module.exports = routes