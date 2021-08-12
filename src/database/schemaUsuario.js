const mongoose = require('mongoose');
const UsuarioModel = require('../model/usuarios.js')

class UsuarioRepoMongo{

    constructor(){
        this.model =  UsuarioModel

    };

    addUsuario(usuario){
        this.model.create(usuario)
    };

    excluirUsuario(email){
        
       
    };

    alterarUsuario(usuario){
        

       
    }

    buscarUsuario(email){

    }

    buscarTodosUsuarios(){
        const consultaUsuario = this.model.find({})
        const promisseUsuario = consultaUsuario.lean().exec()
        return promisseUsuario
    }
}

module.exports = UsuarioRepoMongo
