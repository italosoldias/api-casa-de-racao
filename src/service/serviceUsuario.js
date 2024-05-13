import UsuarioRepoMongo from '../database/schemaUsuario.js';
import jsonWebToken from 'jsonwebtoken';
import bcrytjs from 'bcryptjs';

class UsuarioService{

    constructor(){
        this.usuariosRepos = new UsuarioRepoMongo();

    };

    async addUsuario(usuario){
       
        const existeUsuario = usuario.idUsuario
        const buscaUsuario = await this.usuariosRepos.buscarUsuarioIdBanco(existeUsuario)
        if(buscaUsuario != null || undefined){ 
            throw new Error ('Esse idUsuario ja existe !!! '  )
            
        } else {
           
           const insertUsuario =  this.usuariosRepos.addUsuario(usuario);
            return insertUsuario
         } 
        
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

   async buscarUsuarioService(parametroPesquisaUsuario){
        const paramsUsuario = parametroPesquisaUsuario

        if (paramsUsuario.idUsuario != null || undefined) {
            let usuarioRetorno = await this.usuariosRepos.buscarUsuarioIdBanco(paramsUsuario.idUsuario)
            return usuarioRetorno
        } else {
            let usuarioRetorno = await  this.usuariosRepos.buscarUsuarioEmailBanco(paramsUsuario.email)
            return usuarioRetorno

        }
        

      }

   async autenticacaoUsuario(email, senha) {
        

        try{
            const autentcat = await this.usuariosRepos.autenticacaoUsuario(email, senha)
            bcrytjs.compare(senha, autentcat.senha )
            return autentcat
        } catch (error) {
             error.message
        }
        
      
        
    }
    geracaoToken( paramns = {}){
        return jsonWebToken.sign({paramns}, '548500933265f234caec46fb5f29da69', {
            expiresIn: 846987,
        } )
    }
}

export default  UsuarioService
