// modelo 


const mongoose = require('mongoose');
const Racao = require('../class/ClassRacao.js');
//const racaoDB = racao

const RacaoSchema = new mongoose.Schema ({


    _id : {
        type: Number,
        required : true,
    },
        descricao:{ 
            type : String,
            required : true,
        },   

        

        valorCompra : {
            type : Number,
            required : true,
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
        }
    
})

RacaoSchema.loadClass(Racao)

const RacaoModel = mongoose.model('Racoe', RacaoSchema);

module.exports = RacaoModel;
