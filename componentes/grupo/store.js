
const Model = require('./model');
const ModelDetalle = require('./modelDetalle');


function agregar(grupo){
    //list.push(estadio);
    const newestadio = new Model(grupo);
    newestadio.save();
}
function agregarDetalle(grupo){
    const nuevoGrupo = new ModelDetalle(grupo);
    nuevoGrupo.save();
}

async function listar(){
    const estadios = await Model.find();
    return estadios;
}
async function listarEquipos(id){
    return new Promise((resolve, reject) =>{
        ModelDetalle.find({
            grupo: id
        })
        .populate('pais')
        .populate('grupo')
        .exec((error, populated) =>{
            if(error){
                reject(error);
                return false;
            }
            resolve(populated);
        })

    });
}

async function editar(grupo){
    const foundEstadio = await Model.findOne({
        _id: grupo._id
    });
  
    foundEstadio.nombre = grupo.nombre;
    const newEstadio = await foundEstadio.save();
}
function remove(id){
    return Model.deleteOne({_id: id});
}

module.exports = {
    add: agregar,
    list: listar,
    editar: editar,
    remove: remove,
    agregarDetalle: agregarDetalle,
    listarEquipos: listarEquipos
}