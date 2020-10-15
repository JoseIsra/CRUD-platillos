const {Sequelize } = require('sequelize');

const platoModelo = require('../models/plato');

const sequelize = new Sequelize("DB_NOMBRE_AQUI","USE_AQUI","DB_PASSWORD",{
        host:'EL_HOST',
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