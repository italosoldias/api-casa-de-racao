import express from 'express';


import EstoqueControler from '../controladores/ControladorEstoque.js';




class EstoqueRota{

    constructor(){
        this.router = express.Router();
        this.estoqueControler = new EstoqueControler()
        this.carregaRotas()
    }


    
    carregaRotas(){

        this.router.get('/racao', this.estoqueControler.buscarTodasRacoes.bind(this.estoqueControler) )

        this.router.get('/coleira', this.estoqueControler.buscarTodasColeiras.bind(this.estoqueControler))
        
        this.router.get('/estoque', this.estoqueControler.buscaTodoEstoque.bind(this.estoqueControler) )
        // implementar um metodo para buscar todo o estoque

        this.router.post('/estoque', this.estoqueControler.addestoque.bind(this.estoqueControler) )

        this.router.put('/racao', this.estoqueControler.alterarRacao.bind(this.estoqueControler))

        this.router.delete('/racao', this.estoqueControler.excluiRacao.bind(this.estoqueControler) )

        }

}





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


export default  new EstoqueRota().router