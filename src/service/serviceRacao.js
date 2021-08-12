
const RacaoBancoMongo = require('../database/schemaRacao.js')

class RacaoService {
    
    constructor(){
        this.racoes = new RacaoBancoMongo()
    };

    addRacao(racao){
        this.racoes.addRacao(racao)
    };

    excluiRacao(id){
        let indice = this.racoes.findIndex((objeto) => objeto.id == id )
        this.racoes.splice(indice , 1)

    };

    alterarRacao(racao){

    };

    buscarTodasRacoes(){
        return this.racoes.buscarTodasRacoes()
    };

}

module.exports = RacaoService