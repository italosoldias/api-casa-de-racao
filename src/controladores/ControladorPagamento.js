import TransacaoService from '../service/serviceTransacao.js';
import Transacao from '../class/ClassTransacao.js';


class PagamentoControler {
    constructor(){
        this.TransacaoService = new TransacaoService()
    }

   async validaRequestPagamento(req, res) {

   }

   async registraPagamento(transacaoPagamento) {
        const pagamentoLT = new Transacao(
            transacaoPagamento.body.nsu,
            transacaoPagamento.body.itens,
            transacaoPagamento.body.formasDeRecebimento,
            transacaoPagamento.body.valorTransacao,
            transacaoPagamento.body.valorTotalPagamento,
            transacaoPagamento.body.tipo,
        )
        const enviaTransacao = await this.TransacaoService.registraPagamento(pagamentoLT)
   }
} 