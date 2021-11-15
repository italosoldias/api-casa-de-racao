
import ColeiraBancoMongo from '../database/schemaColeira.js';

class ColeiraService {
    
    constructor(){
        this.coleiras = new ColeiraBancoMongo()
    };

    addColeira(error, coleira){
        let erromongo = error
        
        this.coleiras.addColeira(coleira, error)
       

        return erromongo
    };

    excluiRacao(_id){
        this.racoes.excluiRacao(_id)

    };

    alterarRacao(racao){
        this.racoes.alterarRacao(racao)
    };

    buscarTodasColeiras(){
        return this.coleiras.buscarTodasColeiras()
    };

}

export default  ColeiraService