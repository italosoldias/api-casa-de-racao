import mongoose from 'mongoose';
import ModeloColeira from '../model/modeloColeira.js';


class ColeiraBancoMongo{
    
    constructor(){
        this.model =  ModeloColeira
    };

    addColeira(Coleira, error){
       
        try {
            this.model.create(Coleira, error)
            
        } catch (erro ) {
            return error
        }
       
       
        
    };

    excluiColeira(_id){
       const promiseExcluiColeira = this.model.deleteOne({_id:_id}).exec()
        return promiseExcluiColeira
    };

    alterarColeira(coleira){
        const queryColeira = {_id:coleira._id}
        const promeseAlteraColeira = this.model.findOneAndUpdate(queryColeira , racao).exec()
        return promeseAlteraColeira
    };

    buscarTodasColeiras(){
        const consulta = this.model.find({})
        const promise = consulta.exec()
        return promise
    };

    buscarColeira(codigoDeBarras){
        const querColeira = {codigoDeBarras}
        const consultarColeiraUN =  this.model.findOne(querColeira).exec()
        
        

    
        return consultarColeiraUN
    };


}

export default  ColeiraBancoMongo