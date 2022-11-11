const store = require('./store');


function agregar(juego){
    return new Promise((resolve, reject) =>{

        // if(juego.nombre === undefined){
        //     console.error('[estadioController] algo ocurrio mal')
        //     return reject('Los datos no son correctos');
        //     return false;
        // }
        const dato = {
            pais1: juego.idpais1,
            pais2: juego.idpais2,
            estadio: juego.idestadio,
            fecha: juego.fecha,
            hora: juego.hora
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

function editar(estadio){
    return new Promise(async(resolve, reject) =>{
        if(!estadio){
            reject('Invalid data');
            return false;
        }
        const result = await store.editar(estadio);
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