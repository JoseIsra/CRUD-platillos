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

router.post('/edit/:id', async(req, res)=>{
    await Plato.update({
            nombre:req.body.nombre,
            ingredientes:req.body.ingredientes,
            descripcion: req.body.descripcion
    },{
        where:{
            id:req.params.id
        }
    });
    console.log("CAMBIOS REALIZADOS!!!! ");
    res.redirect('/login');
});


router.get('/delete/:id', async (req, res)=>{
await Plato.destroy({
    where:{
        id: req.params.id
    }
});
    
    res.redirect('/login');
});


module.exports = router;