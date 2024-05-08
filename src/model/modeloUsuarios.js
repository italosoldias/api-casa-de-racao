import mongoose from 'mongoose';
import Usuario from '../class/Usuarios.js';
import bcryptjs from 'bcryptjs';
//const racaoDB = racao
//definindo o modelo da colection
const UsuarioSchema = new mongoose.Schema ({

        idUsuario :{
            type: Number,
            required: false,
            unique: true,
        },
        
        
        nome : {
            type : String,
            required  : true,
            select: true,
        },
        email : {
            type : String,
            select: true,
            unique: true,
            required  : true,
            lowercase: true,
        },
        
        senha : {
            type : String,
            required  : true,
            select: true,
            
        },
        
        datadeCriacao: {
            type: Date,
            default: Date.now,
        }
        
    
})

// objeto q representa os dados

UsuarioSchema.loadClass(Usuario);

// UsuarioSchema.pre

UsuarioSchema.pre('save', async function(next){
    const hashAdd = await bcryptjs.hash(this.senha, 10)
    this.senha = hashAdd
    next()
})
const UsuarioModel = mongoose.model('Usuario', UsuarioSchema);






export default UsuarioModel;
