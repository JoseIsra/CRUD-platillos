const {Plato} = require('../database/dbconfig');
const router = require('express').Router();

router.get('/',(req, res)=>{
    res.render('listarPlatos');
});

router.get('/platos', async(req,res)=>{
    const platos = await Plato.findAll();
    const respuestaJson = JSON.stringify(platos);
    res.send(respuestaJson);
    res.end();
});

module.exports = router;