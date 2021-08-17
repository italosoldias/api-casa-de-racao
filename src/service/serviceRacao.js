
import RacaoBancoMongo from '../database/schemaRacao.js';

class RacaoService {
    
    constructor(){
        this.racoes = new RacaoBancoMongo()
    };

    addRacao(racao){
        this.racoes.addRacao(racao)
    };

    excluiRacao(_id){
        this.racoes.excluiRacao(_id)

    };

    alterarRacao(racao){
        this.racoes.alterarRacao(racao)
    };

    buscarTodasRacoes(){
        return this.racoes.buscarTodasRacoes()
    };

}

export default  RacaoService