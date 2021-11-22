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

    async addestoque (req, res){
        

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
                } else{ await this.coleiraService.addColeira( coleiraLT)}

                

                res.status(200).send({Sucesso: "uma coleira foi adicionada com sucesso",
                ItemAdicionado : coleiraLT    })
                

                        
            } catch (e ) {
                res.status(400).send({Erro : e.message})
            break;
        }
            
        case 'racao' :
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
                            await this.racoesService.addRacao(racaoLT )
                           
                            res.json(racaoLT)
                        } catch (e) {
            
                            res.status(400).send({Erro : e.message}) 
                            break;
                        }
        
            default: res.send({Erro: "deu rum"})
            break;
            // opts
        }
       
           //qqq
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

    async buscaUmaRacao(req, res){
            const racaoUN =  await this.racoesService.buscarRacao(req.codigoDeBarras, res)
            const respost = racaoUN
            console.log(respost)
     
            return respost
        

    };

    async buscaUmaColeira(req, res){
        const coleiraUN =  await this.racoesService.buscarRacao(req.codigoDeBarras, res)
       const respostColeira = coleiraUN
       
      

       
      console.log(respostColeira)
     
      return respostColeira
        

    }


    async buscaTodoEstoque (req, res){
        
      //this.buscarTodasColeiras(req, res) 
       let e = this.buscarTodasRacoes(req, res) 
       let a = await this.buscarTodasColeiras(req, res) 
        
        
    }

        
    
}



export default  EstoqueControler