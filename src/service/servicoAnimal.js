import { alteraAnimalBanco,addAnimalBanco,buscaAnimalIdTutorBanco,buscaAnimalIdAnimalBanco, buscaAnimalNomeAnimalBanco } from "../database/schemaAnimal.js";


export async function adicionaAnimalService(animal){

    const existeAnimal = animal.idAnimal
    const buscaAnimal = await buscaAnimalIdAnimalBanco(existeAnimal)
    if (buscaAnimal != null || undefined) {
        throw new Error ('Esse Id animal ja existe !!! ')
    } else {
        const adicionaAnimal = await addAnimalBanco(animal)
        return adicionaAnimal
    }
    
}

export async function buscaAnimalService(parametroPesquisaAnimal) {

    const parametroAnimal = parametroPesquisaAnimal

    if (parametroAnimal.idAnimal != null || undefined) {
        
        let animalRetorno = await buscaAnimalIdAnimalBanco(parametroAnimal.idAnimal)
        return animalRetorno
    } if (parametroAnimal.idTutor != null || undefined) { 
        let animalRetorno = await buscaAnimalIdTutorBanco(parametroAnimal.idTutor)
        return animalRetorno
    } else  {
        let animalRetorno = await buscaAnimalNomeAnimalBanco(parametroAnimal.nomeAnimal)
        return animalRetorno
    } 
     

}

export async function altereAnimalService(animal) {

    // buscaAnimalIdAnimalBanco(animal)
    const alteraAnimalCadastrado = await alteraAnimalBanco(animal)
    if (alteraAnimalCadastrado != null || undefined) {
        return alteraAnimalCadastrado
    } else {
        
        throw new Error ('Não foi possivel alterar o cadastro do animal' )
    }
    
}