import mongoose from 'mongoose';
import ModeloDinamico from '../model/modeloItem.js';


class DinamicoBancoMongo{
    
    constructor(){
        this.model =  ModeloDinamico
    };

    addItemBanco(reqObjetocompleto, error){
       
        try {
            this.model.create(reqObjetocompleto, error)
            
        } catch (erro ) {
            return error
        }
    };

    buscarTodosItensBanco(req){
        const consulta = this.model.find({})
        const promise = consulta.exec()
        return promise
    };


     buscarItemBanco(paramBusca, valorBusca) {       
        
        const paramBuscaSet = paramBusca
        const valorBuscaSet = valorBusca

        switch (paramBuscaSet) {
            case "codigoDeBarras":
                //const conjunto = { codigoDeBarras : valorBuscaSet}
                const codigoDeBarras =  valorBuscaSet
                console.log(codigoDeBarras)
                const queryItemBancoPorCOD =  this.model.findOne({codigoDeBarras}).exec()
                const resQueryItembancoCOD =  queryItemBancoPorCOD
                
                    return resQueryItembancoCOD
                break;
            case "_id" :
                const queryItemBanco_ID =  this.model.findOne( { "_id" : valorBusca}).exec()
                    return queryItemBanco_ID
                break;
            default: return "Houve um problema aqui no => buscarItemBanco()"
                break;
        }   
    };

    alterarCadastroItemBanco(item){
        const queryItemAlteracao = {codigoDeBarras:item.codigoDeBarras}
        const promeseAlteraItem = this.model.findOneAndUpdate(queryItemAlteracao , item).exec()
        return promeseAlteraItem
    };
    
    // alterarQantidadeItemBanco(item){
    //     const queryItemAlteracao = {codigoDeBarras:item.codigoDeBarras}
    //     const promeseAlteraItem = this.model.findOneAndUpdate(queryItemAlteracao , item.quantidade).exec()
    //     return promeseAlteraItem
    // }
    

}

export default DinamicoBancoMongo