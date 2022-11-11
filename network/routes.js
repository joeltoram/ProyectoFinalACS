const express = require('express');
const estadio  = require('../componentes/estadio/network'); 
const pais = require('../componentes/paises/network');
const equipo = require('../componentes/equipo/network');
const grupo = require('../componentes/grupo/network');
const juego = require('../componentes/juego/network');
const user = require('../componentes/user/network');
const auth = require('../componentes/auth/network');


const routes = function (server){
    //cada vez que llamen a la ruta llamaran al componente equipos
    server.use('/estadio', estadio);
    server.use('/pais', pais);
    server.use('/equipo', equipo);
    server.use('/grupo', grupo);
    server.use('/juego', juego);    
    server.use('/user', user);
    server.use('/auth', auth);
}
module.exports = routes;