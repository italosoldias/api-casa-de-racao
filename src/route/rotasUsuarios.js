import express from'express';
 
//const Usuario = require('../model/usuarios.js');
import UsuarioControler from'../controladores/ControladorUsuario.js';
const routerUsuario = express.Router();
const usuarioControler = new UsuarioControler()
// this.carregadorRotas()

function carregadorRotas(){

   routerUsuario.get('/usuario', usuarioControler.buscarTodosUsuarios.bind(usuarioControler))
   routerUsuario.get('/usuario:id', usuarioControler.buscarUsuario.bind(usuarioControler))
    
   routerUsuario.post('/usuario', usuarioControler.addUsuario.bind(usuarioControler))
   routerUsuario.post('/autenticacao', usuarioControler.autenticacaoUsuario.bind(usuarioControler) )


   routerUsuario.put('/usuario', usuarioControler.alterarUsuario.bind(usuarioControler))
    
   routerUsuario.delete('/usuario', usuarioControler.excluirUsuario.bind(usuarioControler))
    
}

// class UsuarioRotas{

//     constructor(){
//        routerUsuario = express.Router();
//         usuarioControler = new UsuarioControler()
//         this.carregadorRotas()
//     }
    
//     carregadorRotas(){

//        routerUsuario.get('/usuario', usuarioControler.buscarTodosUsuarios.bind(usuarioControler))
//        routerUsuario.get('/usuario:id', usuarioControler.buscarUsuario.bind(usuarioControler))
        
//        routerUsuario.post('/usuario', usuarioControler.addUsuario.bind(usuarioControler))
//        routerUsuario.post('/autenticacao', usuarioControler.autenticacaoUsuario.bind(usuarioControler) )


//        routerUsuario.put('/usuario', usuarioControler.alterarUsuario.bind(usuarioControler))
        
//        routerUsuario.delete('/usuario', usuarioControler.excluirUsuario.bind(usuarioControler))
        
//     }



// }



carregadorRotas()

export {routerUsuario}
