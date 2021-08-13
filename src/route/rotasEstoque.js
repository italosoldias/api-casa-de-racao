const express = require('express');


const RacaoControler = require('../controladores/ControladorEstoque.js')




class RacaoRota{

    constructor(){
        this.router = express.Router();
        this.racaoControler = new RacaoControler()
        this.carregaRotas()
    }

    carregaRotas(){

        this.router.get('/racao', this.racaoControler.buscarTodasRacoes.bind(this.racaoControler) )

        this.router.post('/racao', this.racaoControler.addRacao.bind(this.racaoControler) )

        this.router.put('/racao', this.racaoControler.alterarRacao.bind(this.racaoControler))

        this.router.delete('/racao', this.racaoControler.excluiRacao.bind(this.racaoControler) )

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


module.exports = new RacaoRota().router