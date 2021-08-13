const UsuarioRepoMongo = require('../database/schemaUsuario.js')

class UsuarioService{

    constructor(){
        this.usuariosRepos = new UsuarioRepoMongo();

    };

    addUsuario(usuario){
        this.usuariosRepos.addUsuario(usuario);
    };

    excluirUsuario(email){
        this.usuariosRepos.excluirUsuario(email)

    };

    alterarUsuario(usuario){
        // this.usuariosRepos.forEach((objeto) => {
        //     if(objeto.email == usuario.email){
        //         objeto.senha = usuario.senha ? usuario.senha : objeto.senha
        //         objeto.nome = usuario.nome ? usuario.nome : objeto.nome
        //     }

        // })
        this.usuariosRepos.alterarUsuario(usuario)
    }

    buscarUsuario(email){

    }

    buscarTodosUsuarios(){
        const exportUsuarios = this.usuariosRepos.buscarTodosUsuarios()
        
        return exportUsuarios
    }
}

module.exports = UsuarioService
