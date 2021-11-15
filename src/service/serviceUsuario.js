import UsuarioRepoMongo from '../database/schemaUsuario.js';
import jsonWebToken from 'jsonwebtoken';
import bcrytjs from 'bcryptjs';

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
       
      const alterar =  this.usuariosRepos.alterarUsuario(usuario)

      return  alterar
    }

    

    buscarTodosUsuarios(){
        const exportUsuarios = this.usuariosRepos.buscarTodosUsuarios()
        
        return exportUsuarios
    }

    buscarUsuario(email){
        const usuarioRetor=   this.usuariosRepos.buscarUsuario(email)
          return usuarioRetor
      }

    autenticacaoUsuario(email, senha) {
        const autentcat = this.usuariosRepos.autenticacaoUsuario(email, senha)

        
        
      bcrytjs.compare(senha, this.usuariosRepos.autenticacaoUsuario(senha) )
        return autentcat
    }
    geracaoToken( paramns = {}){
        return jsonWebToken.sign({paramns}, '548500933265f234caec46fb5f29da69', {
            expiresIn: 846987,
        } )
    }
}

export default  UsuarioService
