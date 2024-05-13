import mongoose from 'mongoose';
import Tutor from '../class/ClassTutor.js';
import bcryptjs from 'bcryptjs';
//const racaoDB = racao
//definindo o modelo da colection
const TutorSchema = new mongoose.Schema ({

        idTutor :{
            type: Number,
            required: true,
            unique: true,
        },
        
        
        nomeTutor : {
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

        numeroTelefone :{
            type : String,
            required: false,
            
        },
        
        datadeCriacao: {
            type: Date,
            default: Date.now,
        }
        
    
})

// objeto q representa os dados

TutorSchema.loadClass(Tutor);

// UsuarioSchema.pre

TutorSchema.pre('save', async function(next){
    const hashAdd = await bcryptjs.hash(this.senha, 10)
    this.senha = hashAdd
    next()
})
const TutorModel = mongoose.model('Tutor', TutorSchema);






export default TutorModel;
