import mongoose from 'mongoose';
import  Coleira from '../class/ClasseColeira.js';
//const racaoDB = racao

const ColeiraSchema = new mongoose.Schema ({


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

        tamanho : {
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
    
})

ColeiraSchema.loadClass(Coleira)

const ColeiraModel = mongoose.model('Coleira', ColeiraSchema);

export default ColeiraModel;
