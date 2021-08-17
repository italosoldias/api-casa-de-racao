
import ColeiraBancoMongo from '../database/schemaColeira.js';

class ColeiraService {
    
    constructor(){
        this.coleiras = new ColeiraBancoMongo()
    };

    addColeira(coleira){
        this.coleiras.addColeira(coleira)
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