
const RacaoService = require('../service/serviceRacao.js')
const RacaoClasse = require('../class/ClassRacao.js')

class RacaoControler {
    
    constructor(){
        this.racoesService = new RacaoService()
    };

    async addRacao (req, res){

            let racaoLT = new RacaoClasse( req.body._id ,req.body.descricao,  req.body.valorCompra , req.body.marca, req.body.categoria, req.body.sabor, req.body.validade ,  req.body.tipo, )
            this.racoesService.addRacao(racaoLT)
            res.json(racaoLT)
    };

    async excluiRacao(req, res){
            await this.racoesService.excluiRacao(req.body._id)
             res.send('excluido com sucesso')
         
    };

    async alterarRacao(req, res) {
            await this.racoesService.alterarRacao(req.body)
            res.send('estoque alterado')
        
    };

    async buscarTodasRacoes(req, res) {
        
            const racoesRetornadas = await this.racoesService.buscarTodasRacoes()
            res.json( racoesRetornadas)
        
    };

}

module.exports = RacaoControler