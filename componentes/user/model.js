const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const mySchema = new Schema({
    nombre: String,
    email: String,
    password: String
});
const model = mongoose.model('users', mySchema);
module.exports = model;