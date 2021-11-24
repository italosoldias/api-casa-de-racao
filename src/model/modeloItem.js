// modelo 


import mongoose from 'mongoose';
import Coleira from'../class/ClasseColeira.js';
import Item from '../class/ClassItem.js';
import Racao from '../class/ClassRacao.js';

//const racaoDB = racao

const ItemSchema = new mongoose.Schema ({


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

        

        marca : {
            type : String,
            required : true,
        },

        categoria : {
            type : String,
            required : true,
        },

        tipo : {
            type : Number,
            required : true
        },
        
        codigoDeBarras :{
            type: Number,
            required : true
        },

        sabor : {
            type : String,
            required : false
        },

        validade : {
            type : String,
            required : false
        },

        tamanho : {
            type : String,
            required : false
        }

    // quero ver se vai 
})





ItemSchema.loadClass(Coleira, Racao)


const DinamicoModel = mongoose.model("ITEM", ItemSchema);

export default  DinamicoModel;
