const mongoose = require('mongoose');
const UsuarioModel = require('../model/modeloUsuarios.js')

class UsuarioRepoMongo{

    constructor(){
        this.model =  UsuarioModel

    };

    addUsuario(usuario){
        this.model.create(usuario)
    };

    excluirUsuario(email){
        const promiseExecluiUsuario = this.model.deleteOne({email:email}).exec()       
        return promiseExecluiUsuario
    };

    alterarUsuario(usuario){
        const queryUsuario = {email:usuario.email}
        const promiseAlterarUsuario = this.model.findOneAndUpdate(queryUsuario , usuario ).exec()
        return promiseAlterarUsuario
       
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
