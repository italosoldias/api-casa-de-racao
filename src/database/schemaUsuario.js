import mongoose from 'mongoose';
import UsuarioModel from '../model/modeloUsuarios.js';
import bcryptjs from 'bcryptjs';
//import { json } from 'body-parser';

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

   async alterarUsuario(usuario){
       const queryUsuario = await this.model.findOne({email:usuario.email}).exec()

        const buscaUsuario =  queryUsuario

         if (!buscaUsuario ){
             const r = "esse usuario não existe"
             return r
         } else {   const queryUsuarioAltera = {email:usuario.email}
                    const seraMudado = {nome : usuario.nome,
                                        senha: usuario.senha}

                    const hashAltera = await  bcryptjs.hash( usuario.senha, 10)

                    const seraMudado2 = {nome : usuario.nome,
                                        senha: hashAltera}
                    const promiseAlterarUsuario = await this.model.findOneAndUpdate(queryUsuarioAltera , seraMudado2 ).exec()
                
                    
                
                    const feito =  promiseAlterarUsuario
                    const respostaAlt = "alterei"
                    return await feito
                 }


        
       //   return await feito
       
    }

   
    buscarTodosUsuarios(){
        const consultaUsuario = this.model.find({})
        const promisseUsuario = consultaUsuario.lean().exec()
        return promisseUsuario
    }
    buscarUsuario(email){
        const querUsuario = {email}
        const consultaUsuarioUN =  this.model.findOne(querUsuario).exec()
        
        

    
        return consultaUsuarioUN
    }


    autenticacaoUsuario(email, senha){
        const queryUsuarioAutent = {email:email, senha:senha}
        const consultaUsuarioAutent = this.model.findOne({email}).select('senha').exec()
        return consultaUsuarioAutent
    }

}

export default  UsuarioRepoMongo
