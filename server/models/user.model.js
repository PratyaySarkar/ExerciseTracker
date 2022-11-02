const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        minlenght: 2,
        maxlength: 25,
        required: true
    }
}, { timestamps: true }
);

const User = model('User', userSchema);

module.exports = User;