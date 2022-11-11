const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const mySchema = new Schema({
    pais: {
        type: Schema.ObjectId,
        ref: 'paises'
    },
    grupo: {
        type: Schema.ObjectId,
        ref: 'grupos'
    }
});
const model = mongoose.model('detalle_grupos', mySchema);
module.exports = model;