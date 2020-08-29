const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
        unique: true
    },

    user_id: { 
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },

    pendency: {
        type: Boolean
    }
})

module.exports = mongoose.model('List', ListSchema)