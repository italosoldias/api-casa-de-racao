class Transacao {
    constructor(nsu,itens,formasDeRecebimento,valorTransacao,valorTotalPagamento, tipo, dataTransacao){
        this.nsu = nsu,
        this.itens = itens,
        this.formasDeRecebimento = formasDeRecebimento,
        this.valorTransacao = valorTransacao,
        this.valorTotalPagamento = valorTotalPagamento,
        this.tipo = tipo
        this.dataTransacao = dataTransacao
    }
}

export default Transacao