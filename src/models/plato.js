

module.exports = (sequelize , type) => {
    return sequelize.define('plate', {
        nombre:{
            type:type.STRING,
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