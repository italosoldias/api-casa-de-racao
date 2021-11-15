import mongoose from 'mongoose';
import ModeloColeira from '../model/modeloColeira.js';


class ColeiraBancoMongo{
    
    constructor(){
        this.model =  ModeloColeira
    };

    addColeira(Coleira, error){
       let erro = error
        try {
            this.model.create(Coleira, error)
        } catch (erro ) {
            return error
        }
       
       
        
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

    buscarTodasColeiras(){
        const consulta = this.model.find({})
        const promise = consulta.exec()
        return promise
    };

}

export default  ColeiraBancoMongo