const { Router } = require('express');
const {Plato} = require('../database/dbconfig');
const router = require('express').Router();

router.get('/',(req, res)=>{
res.send('listado de platillos');
});

module.exports = router;