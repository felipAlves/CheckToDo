const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const rateLimit = require("express-rate-limit");

const routes = require('./routes')

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100 
});

mongoose.connect('mongodb+srv://felipealves:felipealves@cluster0.b2c4e.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const app = express()

app.use(cors())
app.use(express.json())
app.use(limiter);
app.use(routes)


app.listen(3333)