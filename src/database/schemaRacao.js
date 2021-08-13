const mongoose = require('mongoose');
const ModeloRacao = require('../model/modeloRacao.js')


class RacaoBancoMongo{
    
    constructor(){
        this.model =  ModeloRacao
    };

    addRacao(racao){
        this.model.create(racao)
    };

    excluiRacao(_id){
       const promiseExcluiRacao = this.model.deleteOne({_id:_id}).exec()
        return promiseExcluiRacao
    };

    alterarRacao(racao){
        const queryRacao = {_id:racao._id}
        const promeseAlteraRacao = this.model.findOneAndUpdate(queryRacao , racao).exec()
        return promeseAlteraRacao
    };

    buscarTodasRacoes(){
        const consulta = this.model.find({})
        const promise = consulta.exec()
        return promise
    };

}

module.exports = RacaoBancoMongo