const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    is_active: {
        type: Boolean,
        default: true,
    },
});

const Users = mongoose.model('User', usersSchema);

module.exports = Users;