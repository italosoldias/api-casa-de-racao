import UsuarioRepoMongo from '../database/schemaUsuario.js';

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
       
        this.usuariosRepos.alterarUsuario(usuario)
    }

    buscarUsuario(email){

    }

    buscarTodosUsuarios(){
        const exportUsuarios = this.usuariosRepos.buscarTodosUsuarios()
        
        return exportUsuarios
    }
}

export default  UsuarioService
