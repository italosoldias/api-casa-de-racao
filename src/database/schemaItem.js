import mongoose from 'mongoose';
import ModeloDinamico from '../model/modeloItem.js';


class DinamicoBancoMongo{
    
    constructor(){
        this.model =  ModeloDinamico
    };

    addItem(reqObjetocompleto, error){
       
        try {
            this.model.create(reqObjetocompleto, error)
            
        } catch (erro ) {
            return error
        }
       
       
        
    };
}

export default DinamicoBancoMongo