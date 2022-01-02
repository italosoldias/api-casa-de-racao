import mongoose from 'mongoose';
import ModeloTransacao from "../model/modeloTransacao.js";

class TransacaoBancoMongo {
    constructor(){
        this.model = ModeloTransacao
    }

    // metodo principal
    registrarTransacaoBanco(transacao){
        this.model.create(transacao)
    }

}

export default TransacaoBancoMongo
