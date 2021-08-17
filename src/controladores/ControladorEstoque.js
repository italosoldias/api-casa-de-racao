import ColeiraService from'../service/serviceColeira.js';
import RacaoService from '../service/serviceRacao.js';
import RacaoClasse from '../class/ClassRacao.js'; 
import ColeiraClasse from'../class/ClasseColeira.js';


class EstoqueControler {
    
    constructor(){
        this.racoesService = new RacaoService()
        this.coleiraService = new ColeiraService()
        //this.buscarTodasColeiras()
        //this.buscarTodasColeiras()
    };

    async addestoque (req, res){
            if(req.body.categoria == 'coleira'){
                let coleiraLT = new ColeiraClasse(req.body._id ,req.body.descricao,  req.body.valorCompra , req.body.marca, req.body.categoria, req.body.tamanho, req.body.tipo)
                this.coleiraService.addColeira(coleiraLT)
                res.json(coleiraLT)
            } else {
                let racaoLT = new RacaoClasse( req.body._id ,req.body.descricao,  req.body.valorCompra , req.body.marca, req.body.categoria, req.body.sabor, req.body.validade ,  req.body.tipo, )
                this.racoesService.addRacao(racaoLT)
                res.json(racaoLT)
            }

            
    };

    async excluiRacao(req, res){
            await this.racoesService.excluiRacao(req.body._id)
             res.send('excluido com sucesso')
         
    };

    async alterarRacao(req, res) {
            await this.racoesService.alterarRacao(req.body)
            res.send('estoque alterado')
        
    };

    async buscarTodasColeiras(req, res){
        
        const coleirasRetornadas = await this.coleiraService.buscarTodasColeiras()
        res.json(coleirasRetornadas) 
        return coleirasRetornadas
    }

    async buscarTodasRacoes(req, res) {
        
            const racoesRetornadas = await this.racoesService.buscarTodasRacoes()
            res.json(racoesRetornadas)
            return racoesRetornadas
        
    };

    async buscaTodoEstoque (req, res){
        
      //this.buscarTodasColeiras(req, res) 
       let e = this.buscarTodasRacoes(req, res) 
       let a = await this.buscarTodasColeiras(req, res) 
        
        
    }

        
    
}



export default  EstoqueControler