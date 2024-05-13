import TutorModel from "../model/modeloTutor.js";
import bcryptjs from 'bcryptjs';

const tutorModelo = TutorModel

export async function adicionarTutorBanco (tutor){

        await tutorModelo.create(tutor)
}


export async function buscarTutorIdBanco(idTutor){
    
    const parametroBuscaIdUsuario = {idTutor}
    const consultaUsuarioUN = await tutorModelo.findOne(parametroBuscaIdUsuario).exec()
     
    return consultaUsuarioUN
    
}

export async function alteraTutorBanco(tutor){

    // const parametroBuscaTutor = {idTutor:tutor.idTutor}
    // const alteraTutor = await tutorModelo.findByIdAndUpdate({parametroBuscaTutor},tutor).exec()
    
    // return await alteraTutor
   


    const queryTutor = await tutorModelo.findOne({idTutor:tutor.idTutor}).exec()

    const buscaTutor =  queryTutor

     if (!buscaTutor ){
         const r = "esse usuario não existe"
         return r
     } else {   const queryTutorAltera = {idTutor:tutor.idTutor}
                const seraMudadoTutor = {nomeTutor : tutor.nomeTutor,
                                    senha: tutor.senha}

                const hashAlteratutor = await  bcryptjs.hash( tutor.senha, 10)

                
                const seraMudado2 = {nomeTutor : tutor.nome,
                                    senha: hashAlteratutor}
                const promiseAlterarUsuario = await tutorModelo.findOneAndUpdate(queryTutorAltera , seraMudado2 ).exec()
            
                
            
                const feito =  promiseAlterarUsuario
                const respostaAlt = "alterei"
                return await feito
             }

}