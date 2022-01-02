import Transacao from "./ClassTransacao.js";

class PagamentoComDinheiro extends Transacao {
    constructor(nsu,
            itens,
            formasDeRecebimento,
            valorTransacao,
            valorTotalPagamento, 
            tipo, 
            dataTransacao,
            troco){
        super(nsu,
            itens,
            formasDeRecebimento,
            valorTransacao,
            valorTotalPagamento, 
            tipo, 
            dataTransacao)  
        this.troco = troco
        }
          
}

export default  PagamentoComDinheiro