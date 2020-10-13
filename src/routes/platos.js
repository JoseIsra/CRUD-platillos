const { Router } = require('express');
const {Plato} = require('../database/dbconfig');
const router = require('express').Router();

router.get('/',(req, res)=>{
    res.render('actualizarPlatos');
});

router.get('/ver',async(req, res) => {
    const platoNombre = req.query.nombre;
const infoDePLato = await Plato.findAll({
        where:{
            nombre: `${platoNombre}`
        }
    });
    const enviarJson = JSON.stringify(infoDePLato);
    res.send(enviarJson);
    res.end();  
});

module.exports = router;