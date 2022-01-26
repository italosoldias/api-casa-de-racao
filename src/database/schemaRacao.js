import mongoose  from 'mongoose';
import ModeloRacao from '../model/modeloRacao.js';


class RacaoBancoMongo{
    
    constructor(){
        this.model =  ModeloRacao
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

    buscarRacao(codigoDeBarras){
        const querRacao = {codigoDeBarras}
        const consultarRacaoUN =  this.model.findOne(querRacao).exec()
        
        

    
        return consultarRacaoUN
    };




    addRacao(racao){
       

        
        this.model.create(racao)
        



    };

}

export default  RacaoBancoMongo