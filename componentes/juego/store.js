
const Model = require('./model');


function agregar(juego){
    //list.push(estadio);
    const newjuego = new Model(juego);
    newjuego.save();
}

async function listar(){
    return new Promise((resolve, reject) =>{
        Model.find()
        .populate('pais1')
        .populate('pais2')
        .populate('estadio')
        .exec((error, populated) =>{
            if(error){
                reject(error);
                return false;
            }
            resolve(populated);
        })
    });
}

async function editar(juego){
    const foundJuego = await Model.findOne({
        _id: juego._id
    });
    foundJuego.nombre = grupo.nombre;
    const newJuego = await foundJuego.save();
}
function remove(id){
    return Model.deleteOne({_id: id});
}

module.exports = {
    add: agregar,
    list: listar,
    editar: editar,
    remove: remove
}