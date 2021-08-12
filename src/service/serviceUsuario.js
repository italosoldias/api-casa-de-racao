const UsuarioRepoMongo = require('../database/schemaUsuario.js')

class UsuarioService{

    constructor(){
        this.usuariosRepos = new UsuarioRepoMongo();

    };

    addUsuario(usuario){
        this.usuariosRepos.addUsuario(usuario);
    };

    excluirUsuario(email){
        
        let indice = this.usuarios.findIndex((objeto) => objeto.email == email )


        this.usuarios.splice(indice,1)
    };

    alterarUsuario(usuario){
        this.usuarios.forEach((objeto) => {
            if(objeto.email == usuario.email){
                objeto.senha = usuario.senha ? usuario.senha : objeto.senha
                objeto.nome = usuario.nome ? usuario.nome : objeto.nome
            }

        })
    }

    buscarUsuario(email){

    }

    buscarTodosUsuarios(){
        const exportUsuarios = this.usuariosRepos.buscarTodosUsuarios()
        
        return exportUsuarios
    }
}

module.exports = UsuarioService
