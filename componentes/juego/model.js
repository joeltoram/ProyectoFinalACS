const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const mySchema = new Schema({
    pais1: {
        type: Schema.ObjectId,
        ref: 'paises'
    },
    pais2: {
        type: Schema.ObjectId,
        ref: 'paises'
    },
    estadio: {
        type: Schema.ObjectId,
        ref: 'estadios'
    },
    gol_equipo1: {
        type: String,
        require: false
    },
    gol_equipo2: {
        type: String,
        require: false
    },
    fecha: String,
    hora: String

});
const model = mongoose.model('juegos', mySchema);
module.exports = model;