const mongoose = require('../database/schema.js');

//const racaoDB = racao

const UsuarioSchema = new mongoose.Schema ({
    
        nome : {
            type : String,
            required  : true,
        },
        email : {
            type : String,
            unique: true,
            required  : true,
            lowercase: true,
        },
        
        senha : {
            type : Number,
            required  : true,
            select: false,
            
        },
        
        datadeCriacao: {
            type: Date,
            default: Date.now,
        }
        
    
})

const Usuario = mongoose.model('Usuario', UsuarioSchema);



Usuario.find({email : "italo@email3.com"})


module.exports = Usuario;
