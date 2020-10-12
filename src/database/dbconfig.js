const {Sequelize } = require('sequelize');

const platoModelo = require('../models/plato');

const sequelize = new Sequelize("platillos","root","54321",{
        host:'localhost',
        dialect:'mysql' 
    });

const Plato = platoModelo(sequelize, Sequelize);

sequelize.sync({force:false})
.then(()=>{
    console.log("TABLAS CREADAS");
}).catch(err => console.log(err));

module.exports = {
Plato
}