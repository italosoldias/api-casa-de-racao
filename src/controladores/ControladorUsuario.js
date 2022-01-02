import UsuarioService from '../service/serviceUsuario.js';
import UsuarioClasse from '../class/Usuarios.js';

import bcryptjs from 'bcryptjs';
import jsonWebToken from 'jsonwebtoken';

// import { readFile } from 'fs/promises';
//  const tk = JSON.parse( await readFile('../config/configtk.json'));
//import * as config from ''
//import tk from '../config/configtk.json';




class UsuarioControler {

    constructor(){
        this.usuarioService = new UsuarioService()
      //  this.bcryptjs = bcryptjs
    };

    async addUsuario(req, res){
        
             let usuarioLT =  await new UsuarioClasse(req.body.idUsuario ,req.body.nome, req.body.email, req.body.senha, req.body.dataDeCriacao)
            this.usuarioService.addUsuario(usuarioLT)

            res.json({
                usuarioLT,
                token: this.usuarioService.geracaoToken({idUsuario : usuarioLT.idUsuario}) 
            })
        };

    async excluirUsuario(req, res){
            await this.usuarioService.excluirUsuario(req.body.email)
             res.send('excluido com sucesso ')
    };

   async  alterarUsuario(req , res){
       
        const ida =   this.usuarioService.alterarUsuario(req.body)
        const resposta = await  ida
          res.json(resposta)
    };

    
   

    async buscarTodosUsuarios(req, res){
            const usuariosRetornados = await this.usuarioService.buscarTodosUsuarios()
            console.log(usuariosRetornados)
            res.json( usuariosRetornados)
    };

    async buscarUsuario(req, res){
        const usuarioUN =  await this.usuarioService.buscarUsuario(req.body.email)
        console.log(usuarioUN)
        res.json(usuarioUN )
    };

    async autenticacaoUsuario (req, res){
        
      console.log(req.body)
      
        const autenticUsuario = await this.usuarioService.autenticacaoUsuario(req.body.email, req.body.senha)
         
        if(!autenticUsuario){
          return  res.status(400).send({erro : "usuario não existe"})
      } 

      const comparacaoCripto = await bcryptjs.compare(req.body.senha,  autenticUsuario.senha )
      if (!comparacaoCripto ) {
        return  res.status(400).send({erro : "senha errada"})
      }
    
  
      autenticUsuario.senha = undefined

      return res.send(
        {
          autenticUsuario, 
            token: this.usuarioService.geracaoToken({idUsuario: autenticUsuario.idUsuario}) })
     
              
            
        
        //const tks = JSON.parse( tk)

        

          
        //  res.status(200).json(autenticEmail, token) 
        
      

        
    }
}

export default  UsuarioControler

