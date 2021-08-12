const mongoose = require('mongoose');
const ModeloRacao = require('../model/modeloRacao.js')


class RacaoBancoMongo{
    
    constructor(){
        this.model =  ModeloRacao
    };

    addRacao(racao){
        this.model.create(racao)
    };

    excluiRacao(id){
       

    };

    alterarRacao(racao){

    };

    buscarTodasRacoes(){
        const consulta = this.model.find({})
        const promise = consulta.exec()
        return promise
    };

}

module.exports = RacaoBancoMongo