const mongoose = require('mongoose');
const Usuario = require('../class/Usuarios.js')
//const racaoDB = racao
//definindo o modelo da colection
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

// objeto q representa os dados
UsuarioSchema.loadClass(Usuario);
const UsuarioModel = mongoose.model('Usuario', UsuarioSchema);






module.exports = UsuarioModel;
