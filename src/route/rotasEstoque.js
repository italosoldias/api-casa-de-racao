const express = require('express');
const router = express.Router();
const RacaoDB = require('../database/schemaRacao.js');
const RacaoClasse = require('../class/ClassRacao.js');
const RacaoService = require('../service/serviceRacao.js');



const racaoService = new RacaoService()








router.get('/estoque/:id', async function (req, res){
    
})

router.get('/racao', async function (req, res) {
    
    res.json( await racaoService.buscarTodasRacoes())
})

router.post('/racao', async function (req, res){
    let racaoLT = new RacaoClasse( req.body._id ,req.body.descricao,  req.body.valorCompra , req.body.marca, req.body.categoria, req.body.sabor, req.body.validade ,  req.body.tipo, )
    racaoService.addRacao(racaoLT)
    res.json(racaoLT)
})

router.delete('/racao', async function (req, res){
    racaoService.excluiRacao(req.body.id)
    res.send('excluido com sucesso')
})

router.post('/estoque', async function (req, res){
    try{
        const racaoDB = await RacaoDB.create(req.body);
        return res.send({racaoDB})
    } catch (erro) {
        const MsErro = erro.errors
        
        console.log(MsErro)
        return res.status(400).send({ MsErro , error : 'registro errado' })
    }
})

router.put('/estoque/:id', async function (req, res){
    
})
router.delete('/estoque/:id', async function (req, res){
    
})


module.exports = router