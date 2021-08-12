const express = require('express');
const router= express.Router(); 
//const Usuario = require('../model/usuarios.js');
const UsuarioClasse = require('../class/Usuarios.js');
const UsuarioService = require('../service/serviceUsuario.js');


const usuarioService = new UsuarioService()

router.get('/usuario', async function (req, res) {
    const usuariosRetornados = await usuarioService.buscarTodosUsuarios()
    console.log(usuariosRetornados)

    res.json( usuariosRetornados)
})

router.post('/usuario', async function (req, res){
    let usuarioLT = new UsuarioClasse(req.body.nome, req.body.email, req.body.senha, req.body.dataDeCriacao)
    usuarioService.addUsuario(usuarioLT)
    res.json(usuarioLT)
})

router.put('/usuario', async function (req , res){
 
    usuarioService.alterarUsuario(req.body)
    res.send('mudou')
})

router.delete('/usuario', async function (req, res){
    usuarioService.excluirUsuario(req.body.email)
    res.send('excluido com sucesso ')
})

module.exports = router
