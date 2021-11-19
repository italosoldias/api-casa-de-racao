import  mongoose  from "mongoose";
import Brinquedo from "../class/ClassBrinquedo";

const BrinquedoSchema = new mongoose.Schema ({

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

BrinquedoSchema.loadClass(Coleira)

const BrinquedoModel = mongoose.model('Brinquedo', BrinquedoSchema);

export default BrinquedoModel;