const store = require('./store');
const bcrypt = require('bcrypt');


function agregar(user){
    return new Promise((resolve, reject) =>{
        if(user.nombre === undefined){
            console.error('[estadioController] algo ocurrio mal')
            return reject('Los datos no son correctos');
            return false;
        }
        const dato = {
            nombre: user.nombre,
            email: user.email,
            password: bcrypt.hashSync(user.password, 9)
        };
        store.add(dato);
        resolve(dato);//resolvemos la promesa
    });
}
 
function listar(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

function editar(user){
    return new Promise(async(resolve, reject) =>{
        if(!user){
            reject('Invalid data');
            return false;
        }
        const result = await store.editar(user);
        resolve(result);
    });
}
function eliminar(id){

    return new Promise((resolve, reject) =>{
        if(!id){reject('El id es invalido'); return false;}
        store.remove(id)
        .then(() =>{
            resolve();
        })
        .catch(e=> reject(e));
    });
}

module.exports = {
    agregar,
    listar,
    editar,
    eliminar
}