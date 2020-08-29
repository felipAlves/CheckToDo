const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
    },

    list_id: {
        type: mongoose.Types.ObjectId,
        ref: 'List',
        required: true
    },

    priority: {
        type: Number,
    }
})


module.exports = mongoose.model('ToDo', ToDoSchema)