import express from 'express';


import {adicionarItem,validaReq,buscaTodoEstoque,buscaTodosItens,buscaItem,alterarQunatidadeItemEstoque,alterarCadastroItemEstoque,adicionarItemSacola,valorItemSacolaTotal} from '../controladores/ControladorEstoque.js';


 const routerEstoque = express.Router();

function carregaRotas(){


    routerEstoque.post('/estoque-i', validaReq)
    routerEstoque.get('/estoque-b', buscaItem)
    routerEstoque.put('/estoque-a',  alterarCadastroItemEstoque)
    
    routerEstoque.put('/estoque-sob',  alterarQunatidadeItemEstoque)
    routerEstoque.get("/estoque-buscatudo",  buscaTodosItens)
    routerEstoque.post('/estoque/sacola',  adicionarItemSacola)






    

   
    
    routerEstoque.get('/estoque',  buscaTodoEstoque )
    // implementar um metodo para buscar todo o estoque
    
    routerEstoque.post('/estoque',  validaReq )

   

   

}

carregaRotas()

export {routerEstoque}

// class EstoqueRota{

//     constructor(){
//         routerEstoque = express.Router();
        
//         this.carregaRotas()
//     }


    
//     carregaRotas(){


//         routerEstoque.post('/estoque-i', validaReq())
//         routerEstoque.get('/estoque-b', buscaItem())
//         routerEstoque.put('/estoque-a',  alterarCadastroItemEstoque())
//         routerEstoque.get('/estoque-c',  buscaUmaRacao() )
//         routerEstoque.put('/estoque-sob',  alterarQunatidadeItemEstoque())
//         routerEstoque.get("/estoque-buscatudo",  buscaTodosItens())
//         routerEstoque.post('/estoque/sacola',  adicionarItemSacola())






//         routerEstoque.get('/racao',  buscarTodasRacoes() )

//         routerEstoque.get('/coleira',  buscarTodasColeiras())
        
//         routerEstoque.get('/estoque',  buscaTodoEstoque() )
//         // implementar um metodo para buscar todo o estoque
        
//         routerEstoque.post('/estoque',  validaReq() )

//         routerEstoque.put('/racao',  alterarRacao())

//         routerEstoque.delete('/estoque',  excluiRacao() )

//         }

// }





// router.get('/estoque/:id', async function (req, res){
    
// })



// router.post('/estoque', async function (req, res){
//     try{
//         const racaoDB = await RacaoDB.create(req.body);
//         return res.send({racaoDB})
//     } catch (erro) {
//         const MsErro = erro.errors
        
//         console.log(MsErro)
//         return res.status(400).send({ MsErro , error : 'registro errado' })
//     }
// })

// router.put('/estoque/:id', async function (req, res){
    
// })
// router.delete('/estoque/:id', async function (req, res){
    
// })


// export default  new EstoqueRota().router