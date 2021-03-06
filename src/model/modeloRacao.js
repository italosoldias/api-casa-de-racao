// modelo 


import mongoose from 'mongoose';
import Racao from'../class/ClassRacao.js';
//const racaoDB = racao

const RacaoSchema = new mongoose.Schema ({


        _id : {
            type: Number,
            required : false,
        },
        
        descricao:{ 
            type : String,
            required : true,
        },   

        

        valorCompra : {
            type : Number,
            required : true,
        },

        valorVenda : {
            type: Number,
            required: false,
        },

        marca : {
            type : String,
            required : true,
        },

        categoria : {
            type : String,
            required : true,
        },

        sabor : {
            type : String,
            required : true,
        },
        
        validade : {
            type : String,
            required : true,
        },
        
        tipo : {
            type : Number,
            required : true,
        },
        
        codigoDeBarras :{
            type: Number,
            required : true

        }
    // quero ver se vai 
})

RacaoSchema.loadClass(Racao)

const RacaoModel = mongoose.model('Racoe', RacaoSchema);

export default  RacaoModel;
