const monggoDb = require('../db/db');
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userschema = new schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
       require: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = {userschema}