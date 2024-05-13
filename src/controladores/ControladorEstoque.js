import ColeiraService from'../service/serviceColeira.js';
import RacaoService from '../service/serviceRacao.js';
import RacaoClasse from '../class/ClassRacao.js'; 
import ColeiraClasse from'../class/ClasseColeira.js';
import {alterarItem,adicionaQuantidadeItem,buscarItemCodigoDeBarras,buscarTodosItens,somaValorTotalSacola,adicionarItemSacolaService,addItem} from '../service/serviceItem.js'
import Item from '../class/ClassItem.js';

const racoesService = new RacaoService()
const coleiraService = new ColeiraService()



export async function adicionarItem(req, res){
      const adicionado =  await addItem(req, res)


      res.status(200).send(adicionado)
    };

export async function validaReq(req, res) {
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
                    await addItem(itemLT, req , res)
                         res.json(itemLT)
         
                    } catch (error) {
                            res.status(400).send({Erro: "hove um problema " + error.message })
                }; 
        };
    };    

export async function  buscaTodosItens(req, res){
        const itemRetornadas = await buscarTodosItens(req)
        res.status(200).send({"Loja":itemRetornadas})
    }


export async function  buscaItem(req, res){
        const bustancoItem = await buscarItemCodigoDeBarras( "codigoDeBarras",req.body.codigoDeBarras)
        const respostItem = bustancoItem
        res.json(respostItem)
    };


export async function  alterarQunatidadeItemEstoque(req, res, item) {

        
        const itemParaAlteracaoQuantidade = req.body 

        if(!itemParaAlteracaoQuantidade.codigoDeBarras){
            res.status(400).send({Erro: "esta faltando informação do produto",})
        } else {
            try {
                await adicionaQuantidadeItem(itemParaAlteracaoQuantidade,req)
                res.send('estoque alterado')
            } catch (error) {
                res.status(400).send({Erro : error.message })
            };

        };
    };


export async function  alterarCadastroItemEstoque(req, res, item) {
        const itemParaAlteracao = req.body || item.codigoDeBarras 

        if(!itemParaAlteracao.codigoDeBarras){
            res.status(400).send({Erro: "esta faltando informação do produto",})
        } else {
            try {
                await alterarItem(itemParaAlteracao,req)
                res.send('estoque alterado')
            } catch (error) {
                res.status(400).send({Erro : error.message })
            };
        };
    };

    

export async function  adicionarItemSacola (req, res) {
        if (!req.body.quantidade ||
            !req.body.codigoDeBarras){
               return res.status(400).send('esta faltando informações')
        } else {
                const itemParaSaloca = {
                    codigoDeBarrasItemSacola : req.body.codigoDeBarras,
                    quantidadeItemSacola : req.body.quantidade
                };

                try {
                   const sacola =   await adicionarItemSacolaService(itemParaSaloca ,req, res)
                    
                    console.log(sacola)
                     res.send(sacola)

                } catch (error) {
                    res.status(400).send({Erro : error.message })
                }
        }
              
    }

export async function  valorItemSacolaTotal(req, res){

    }





















    // o que sera ainda migrado para o novo padrão de item

export async function  addestoque (req, res){
        

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
                } else{ await addColeira( coleiraLT)}

                

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
                            await addRacao(racaoLT )
                           
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
    
export async function  excluiRacao(req, res){
            await excluiRacao(req.body._id)
             res.send('excluido com sucesso')
         
    };

export async function  alterarRacao(req, res) {
            await alterarRacao(req.body)
            res.send('estoque alterado')
        
    };

export async function  buscarTodasColeiras(req, res){
        
        const coleirasRetornadas = await buscarTodasColeiras()
        res.json(coleirasRetornadas) 
        return coleirasRetornadas
    }

export async function  buscarTodasRacoes(req, res) {
        
            const racoesRetornadas = await buscarTodasRacoes()
            res.json(racoesRetornadas)
            return racoesRetornadas
        
    };

export async function  buscaUmaRacao(req, res){
            const racaoUN =  await buscarRacao(req.body.codigoDeBarras, res)
            const respost = racaoUN
            console.log(respost)
     
            res.json(respost)
        

    };

export async function  buscaUmaColeira(req, res){
        const coleiraUN =  await buscarRacao(req.codigoDeBarras, res)
       const respostColeira = coleiraUN
       
      

       
      console.log(respostColeira)
     
      return respostColeira
        

    }

    


export async function  buscaTodoEstoque (req, res){
        
      //this.buscarTodasColeiras(req, res) 
       let e = buscarTodasRacoes(req, res) 
       let a = await buscarTodasColeiras(req, res) 
        
        
    }

        