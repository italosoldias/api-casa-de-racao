import express from'express';
 
//const Usuario = require('../model/usuarios.js');
import UsuarioControler from'../controladores/ControladorUsuario.js';



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





export default  new UsuarioRotas().router
