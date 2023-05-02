const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resetSchema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    expiry: {
        type: Date,
        required: true,
    },
})

const Reset = mongoose.model('Reset', resetSchema);
module.exports = Reset;