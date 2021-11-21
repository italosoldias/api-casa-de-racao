
import RacaoBancoMongo from '../database/schemaRacao.js';

class RacaoService {
    
    constructor(){
        this.racoes = new RacaoBancoMongo()
    };

    async addRacao(racao ){
      const existeRacao =  await this.buscarRacao(racao.codigoDeBarras)
     //const erroNo =  new Error('esse post ja existe');
      if(existeRacao) {   throw new Error('esse codigoDeBarras ja existe');  } 
        this.racoes.addRacao(racao)
    };

    excluiRacao(_id){
        this.racoes.excluiRacao(_id)

    };

    alterarRacao(racao){
        this.racoes.alterarRacao(racao)
    };

    buscarRacao(codigoDeBarras){
        const racaoRetor=   this.racoes.buscarRacao(codigoDeBarras)
          return racaoRetor
      }

    buscarTodasRacoes(){
        return this.racoes.buscarTodasRacoes()
    };

}

export default  RacaoService