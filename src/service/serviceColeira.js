
import ColeiraBancoMongo from '../database/schemaColeira.js';

class ColeiraService {
    
    constructor(){
        this.coleiras = new ColeiraBancoMongo()
    };

    async addColeira(coleira){
        const existeColeira = await this.buscarColeira(coleira.codigoDeBarras)
        if(existeColeira) {   throw new Error('esse codigoDeBarras ja existe');  }
        this.coleiras.addColeira(coleira, error)
       

        
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

    buscarColeira(codigoDeBarras){
        const coleiraRetor=   this.coleiras.buscarColeira(codigoDeBarras)
          return coleiraRetor
    }
}

export default  ColeiraService