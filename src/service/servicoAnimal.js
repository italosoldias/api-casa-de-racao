import { addAnimalBanco,buscaAnimalIdAnimalBanco, buscaAnimalNomeAnimalBanco } from "../database/schemaAnimal.js";


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
    } else  {
        let animalRetorno = await buscaAnimalNomeAnimalBanco(parametroAnimal.nomeAnimal)
        return animalRetorno
    } 
    // else {parametroAnimal.nome != null || undefined)
    //     let animalRetorno = await buscaAnimalIdTutorAnimalBanco(parametroAnimal.IdTutor)
    //     return animalRetorno
    // }

}