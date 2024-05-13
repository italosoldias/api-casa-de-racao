import { buscarTutorIdBanco,adicionarTutorBanco, alteraTutorBanco } from "../database/schemaTutor.js";

export async function adicionaTutorService (tutor){

    const existeTutor = await buscarTutorIdBanco(tutor.idTutor)
    if (existeTutor != null || undefined) {
        throw new Error ('Esse Id tutor ja existe !!! ')
    } else {
        const adicionaTutor = await adicionarTutorBanco(tutor)
        return adicionaTutor
    }
   
    
}

export async function buscaTutorService(parametroPesquisaAnimal) {

    const buscaTutorId = await buscarTutorIdBanco(parametroPesquisaAnimal.idTutor)

    return buscaTutorId
}

export async function alteraTutorService(tutor){
    
    const alteraTutorCadastrado = await alteraTutorBanco(tutor)
    if (alteraTutorCadastrado != null || undefined) {
        return alteraTutorCadastrado
    } else {
        
        throw new Error ('Não foi possivel alterar o cadastro do animal' )
    }
}