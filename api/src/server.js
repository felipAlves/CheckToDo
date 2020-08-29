const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

mongoose.connect('mongodb+srv://felipealves:felipealves@cluster0.b2c4e.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const app = express()


app.use(express.json())
app.use(routes)


app.listen(3333)