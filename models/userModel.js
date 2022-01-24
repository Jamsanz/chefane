const { Schema } = require('mongoose');
const { model } = require('mongoose');

const userSchema = Schema({
    fullName: String,
    email: String,
    phone: Number | String,
    password: String,
    role: {
        type: String,
        enum: ["user", "admin", "super-admin"],
        default: 'user'
    },
    cart: [],
    ordered: []

});

module.exports = model('User', userSchema);