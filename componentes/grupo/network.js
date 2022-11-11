const express = require('express'); //utilizamos express
const response = require('../../network/response');//agregamos el modulo de respuestas
const controller = require('./controller')


const router = express.Router(); //utilizamos el router para las ratus 

router.get('/', (req,res) => {
    controller.listar()
    .then((estadioList) => {
        response.getInformation(res, estadioList);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500, e);
    })
});

router.post('/add', (req, res) => {
    controller.agregar(req.body)
    .then(() => response.success(req,res, 'Creado Correctamente', 201))
    .catch(e =>{
        response.datosRequeridos(req,res, 'Error inesperado', 400);
    });
});

router.put('/edit',(req,res) =>{
    controller.editar(req.body)
    .then(()=> response.success(req,res,'Editado Correctamente', 200))
    .catch(e => {
        response.error(req, res, 'Error del servidor', 500, e);
    });
});

router.delete('/delete/:id',(req, res) =>{
    controller.eliminar(req.params.id)
    .then(() => response.success(req,res, 'El estadio fue eliminado',200))
    .catch(e => response.error(req,res,'Error interno', 500, e));
});

router.post('/add/detalle', (req,res)=>{
    console.log(req.body)
    controller.agregarDetalle(req.body)
    .then(()=> response.success(req, res, 'se agrego el equipo al grupo', 200))
    .catch(e=> response.error(req,res,'Sucedio un error interno', 500, e));
});

router.get('/listardetalle/:id', (req,res) => {
    controller.listarEquipos(req.params.id)
    .then((listaEquipos) => {
        response.getInformation(res, listaEquipos);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 500, e);
    })
});

module.exports = router; //exportamos el router
