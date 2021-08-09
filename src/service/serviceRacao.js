const { model } = require("mongoose");

class RacaoService {
    
    constructor(){
        this.racoes = [];
    };

    addRacao(racao){
        this.racoes.push(racao)
    };

    excluiRacao(id){
        let indice = this.racoes.findIndex((objeto) => objeto.id == id )
        this.racoes.splice(indice , 1)

    };

    alterarRacao(racao){

    };

    buscarTodasRacoes(){
        return this.racoes
    };

}

module.exports = RacaoService