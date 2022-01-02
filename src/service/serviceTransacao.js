import TransacaoBancoMongo from '../database/schemaTransacao.js';
import ItemService from './serviceItem.js';

class serviceTransacao {
    constructor(){
        this.transacao = new TransacaoBancoMongo()
    }

    async registraPagamento (req,res){

        


        const mandaTransacaoBanco = this.transacao.registrarTransacaoBanco(req)
        return mandaTransacaoBanco
    }

}

export default serviceTransacao