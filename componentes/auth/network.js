const express = require('express'); //utilizamos express
const response = require('../../network/response');//agregamos el modulo de respuestas
const controller = require('./controller')
const router = express.Router(); //utilizamos el router para las ratus 

router.post('/', (req,res) => {
    controller.login(req.body.email, req.body.password)
    .then((token) => {
        response.getInformation(res, token);
    })
    .catch(e => {
        response.error(req,res, 'Unexpected Error', 400, e);
    })
    
});



module.exports = router; //exportamos el router



