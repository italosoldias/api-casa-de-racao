const express = require('express');
const router= express.Router();
const RacaoDB = require('../database/schemaRacao.js');
const RacaoClasse = require('../class/ClassRacao.js');
const RacaoService = require('../service/serviceRacao.js');
const Usuario = require('../model/usuarios.js');
const UsuarioClasse = require('../class/Usuarios.js');
const UsuarioService = require('../service/serviceUsuario.js');

const racaoService = new RacaoService()
const usuarioService = new UsuarioService()



const racao = new RacaoClasse("magnos", "carne", 15/05/21, 50.0, 1)
const racao2 = new RacaoClasse("magnos", "vaca", 15/05/21, 50.0, 1)



router.get('/estoque', async function (req, res){
    
    await res.json([{
        Usuario,
        racao2,
        
    }]);
    
})
router.get('/estoque/:id', async function (req, res){
    
})

router.get('/usuario', async function (req, res) {
    
        res.json(usuarioService.buscarTodosUsuarios())
})

router.post('/usuario', async function (req, res){
    let usuarioLT = new UsuarioClasse(req.body.marca, req.body.email, req.body.senha, req.body.dataDeCriacao)
    usuarioService.addUsuario(usuarioLT)
    res.json(usuarioLT)
})

router.delete('/usuario', async function (req, res){
    usuarioService.excluirUsuario(req.body.email)
    res.send('excluido com sucesso ')
})

router.get('/racao', async function (req, res) {
    
    res.json(racaoService.buscarTodasRacoes())
})

router.post('/racao', async function (req, res){
    let racaoLT = new RacaoClasse(req.body.fabricante, req.body.sabor, req.body.validade , req.body.precoDaCompra, req.body.tipo, req.body.id )
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