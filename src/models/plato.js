

module.exports = (sequelize , type) => {
    return sequelize.define('plate', {
        platillo:{
            type:type.TEXT,
            allowNull:false
        },  
        ingredientes:{
            type:type.TEXT,
            allowNull:false
        },  
        descripcion:{
            type:type.TEXT,
            allowNull:false
        },  
        
    },{
        timestamps:false
    })
}