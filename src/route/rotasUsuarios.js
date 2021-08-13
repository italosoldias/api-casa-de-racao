const express = require('express');
 
//const Usuario = require('../model/usuarios.js');
const UsuarioControler = require('../controladores/ControladorUsuario.js')



class UsuarioRotas{

    constructor(){
        this.router = express.Router();
        this.usuarioControler = new UsuarioControler()
        this.carregadorRotas()
    }
    
    carregadorRotas(){

        this.router.get('/usuario', this.usuarioControler.buscarTodosUsuarios.bind(this.usuarioControler))
        
        
        this.router.post('/usuario', this.usuarioControler.addUsuario.bind(this.usuarioControler))
        
        this.router.put('/usuario', this.usuarioControler.alterarUsuario.bind(this.usuarioControler))
        
        this.router.delete('/usuario', this.usuarioControler.excluirUsuario.bind(this.usuarioControler))
        
    }



}





module.exports = new UsuarioRotas().router
