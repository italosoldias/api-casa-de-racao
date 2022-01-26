import ColeiraService from'../service/serviceColeira.js';
import RacaoService from '../service/serviceRacao.js';
import RacaoClasse from '../class/ClassRacao.js'; 
import ColeiraClasse from'../class/ClasseColeira.js';
import ItemService from '../service/serviceItem.js'
import Item from '../class/ClassItem.js';


class EstoqueControler {
    
    constructor(){
        this.racoesService = new RacaoService()
        this.coleiraService = new ColeiraService()
        this.itemEstoque = new ItemService()
        //this.buscarTodasColeiras()
        //this.buscarTodasColeiras()
    };

   

    async adicionarItem(req, res){
      const adicionado =  await this.itemEstoque.addItem(req, res)


      res.status(200).send(adicionado)
    };

    async validaReq(req, res) {
        //precisa ajustar essa criação do novo item esta faltando informações no banco
        
        const itemLT = new Item(
            req.body._id,
            req.body.descricao,
            req.body.valorCompra,
            req.body.marca,
            req.body.categoria,
            req.body.tipo,
            req.body.codigoDeBarras,
            req.body.tamanho,
            req.body.quantidade)

        if(!itemLT._id || 
           !itemLT.descricao ||
           !itemLT.valorCompra ||
           !itemLT.marca ||
           !itemLT.categoria || 
           !itemLT.tipo ||
           !itemLT.codigoDeBarras){
            return  res.status(400)
                        .send({Erro: "esta faltando informação do produto",
                                 oQueFoiMandado: itemLT })
            } else {
                 try {
                    await this.itemEstoque.addItem(itemLT, req , res)
                         res.json(itemLT)
         
                    } catch (error) {
                            res.status(400).send({Erro: "hove um problema " + error.message })
                }; 
        };
    };    

    async buscarTodosItens(req, res){
        const itemRetornadas = await this.itemEstoque.buscarTodosItens(req)
        res.status(200).send({"Loja":itemRetornadas})
    }


    async buscaItem(req, res){
        const bustancoItem = await this.itemEstoque.buscarItemCodigoDeBarras( "codigoDeBarras",req.body.codigoDeBarras)
        const respostItem = bustancoItem
        res.json(respostItem)
    };


    async alterarQunatidadeItemEstoque(req, res, item) {

        
        const itemParaAlteracaoQuantidade = req.body 

        if(!itemParaAlteracaoQuantidade.codigoDeBarras){
            res.status(400).send({Erro: "esta faltando informação do produto",})
        } else {
            try {
                await this.itemEstoque.adicionaQuantidadeItem(itemParaAlteracaoQuantidade,req)
                res.send('estoque alterado')
            } catch (error) {
                res.status(400).send({Erro : error.message })
            };

        };
    };


    async alterarCadastroItemEstoque(req, res, item) {
        const itemParaAlteracao = req.body || item.codigoDeBarras 

        if(!itemParaAlteracao.codigoDeBarras){
            res.status(400).send({Erro: "esta faltando informação do produto",})
        } else {
            try {
                await this.itemEstoque.alterarItem(itemParaAlteracao,req)
                res.send('estoque alterado')
            } catch (error) {
                res.status(400).send({Erro : error.message })
            };
        };
    };

    

   async adicionarItemSacola (req, res) {
        if (!req.body.quantidade ||
            !req.body.codigoDeBarras){
               return res.status(400).send('esta faltando informações')
        } else {
                const itemParaSaloca = {
                    codigoDeBarrasItemSacola : req.body.codigoDeBarras,
                    quantidadeItemSacola : req.body.quantidade
                };

                try {
                   const sacola =   await this.itemEstoque.adicionarItemSacolaService(itemParaSaloca ,req, res)
                    
                    console.log(sacola)
                     res.send(sacola)

                } catch (error) {
                    res.status(400).send({Erro : error.message })
                }
        }
              
    }

    async valorItemSacolaTotal(req, res){

    }





















    // o que sera ainda migrado para o novo padrão de item

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
            const racaoUN =  await this.racoesService.buscarRacao(req.body.codigoDeBarras, res)
            const respost = racaoUN
            console.log(respost)
     
            res.json(respost)
        

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