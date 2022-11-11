
const Model = require('./model');


function agregar(user){
    //list.push(estadio);
    const newuser = new Model(user);
    newuser.save();

}

async function listar(){
    const users = await Model.find();
    return users;
}

async function login(email){
    const users = await Model.findOne({
        email: email
    });
    return users;
}

async function editar(estadio){
    const foundUser = await Model.findOne({
        _id: estadio._id
    });
  
    foundUser.nombre = estadio.nombre;
    foundUser.direccion = estadio.direccion;
    foundUser.capacidad = estadio.capacidad;
    foundUser.ciudad = estadio.ciudad;
    const newUser = await foundUser.save();
}
function remove(id){
    return Model.deleteOne({_id: id});
}

module.exports = {
    add: agregar,
    list: listar,
    editar: editar,
    remove: remove,
    login: login
}