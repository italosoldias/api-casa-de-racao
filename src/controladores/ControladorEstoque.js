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

    validaReq(req, res) {
        let requizi = req.body
        
        if(!req.body._id || 
           !req.body.descricao ||
           !req.body.valorCompra ||
           !req.body.marca ||
           !req.body.categoria || 
           !req.body.tipo ||  
           !req.body.codigoDeBarras ){
            return  res.status(400)
                        .send({Erro: "esta faltando informação do produto",
                                 oQueFoiMandado: requizi })
            }else{
                this.addestoque(req, res)
            } 
    };    

    async addestoque (req, res, error){
        

        switch (req.body.categoria) {
            case 'coleira':
                    let coleiraLT = new ColeiraClasse(
                        req.body._id,
                        req.body.descricao,  
                        req.body.valorCompra,
                        req.body.marca,
                        req.body.categoria, 
                        req.body.tipo,    
                        req.body.codigoDeBarras,
                         req.body.tamanho)


            try {  
                if (!req.body.tamanho){
                    res.status(400).send({Erro: "Não foi enviada a propriedade de tamanho"})
                } else{this.coleiraService.addColeira(error, coleiraLT)}

                

                res.status(200).send({Sucesso: "uma coleira foi adicionada com sucesso",
                ItemAdicionado : coleiraLT    })
                

                        
            } catch (error ) {
             res.json({error})
            break;
        }
            
            break;
        
            default:
                let racaoLT = new RacaoClasse( req.body._id,
                    req.body.descricao,
                    req.body.valorCompra,
                    req.body.marca,
                    req.body.categoria, 
                    req.body.sabor, 
                    req.body.validade , 
                    req.body.tipo, 
                    req.body.codigoDeBarras)
                

                    try {
                        this.racoesService.addRacao(racaoLT, error )
                        res.json(racaoLT)
                    } catch (error) {
                        res.Erro(error)
                    }

                
                break;
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