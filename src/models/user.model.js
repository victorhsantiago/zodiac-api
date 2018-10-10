const mongoose = require('mongoose')

const server = 'ds035747.mlab.com:35747'
const database = 'signs'
const user = 'admin'
const password = 'vhs1704'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    birthdate: {
        type: Date,
    },
    sign: {
        type: String,
    }
})

module.exports = mongoose.model('User', UserSchema)