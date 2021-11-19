
import ColeiraBancoMongo from '../database/schemaColeira.js';

class ColeiraService {
    
    constructor(){
        this.coleiras = new ColeiraBancoMongo()
    };

    addColeira(error, coleira){
        
        
        this.coleiras.addColeira(coleira, error)
       

        return erromongo
    };

    excluiColeira(_id){
        this.coleiras.excluiColeira(_id)

    };

    alterarColeira(coleira){
        this.coleiras.alterarColeira(coleira)
    };

    buscarTodasColeiras(){
        return this.coleiras.buscarTodasColeiras()
    };

}

export default  ColeiraService