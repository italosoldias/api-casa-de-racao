import  mongoose  from "mongoose";

import Transacao from "../class/ClassTransacao.js";

const TransacaoSchema = new mongoose.Schema({
    
    nsu :{
        type : Number,
        required : true
    },

    itens : {
        type : Array,
        required: true
    },

    formasDeRecebimento : {
        type : Array,
        required : true
    },

    valorTotalTransacao : {
        type : Number,
        required : true
    },

    dataTransacao : {
        type: Date,
        default: Date.now,
    }

})

TransacaoSchema.loadClass(Transacao)

const TransacaoModel = mongoose.model('TRANSACAO', TransacaoSchema)

export default TransacaoModel;