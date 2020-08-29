const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    username: {
        type: String,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        required: true,
        select: true // colocar como false dps
    }
})

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})


module.exports = mongoose.model('User', UserSchema)