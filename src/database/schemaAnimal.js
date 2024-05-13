import ModeloAnimal from "../model/modeloAnimal.js";


const bancoAnimal =   ModeloAnimal

export async function addAnimalBanco (reqAnimal) {

    try {
        
        const animalAdicionado =  bancoAnimal.create(reqAnimal)
    } catch (erro) {
        return erro
    }

    
 };

export async function buscaAnimalIdAnimalBanco (idAnimal) {

    let parametroBuscaAnimalIdAnimal = {idAnimal}
    let consultaAnimal = await bancoAnimal.findOne(parametroBuscaAnimalIdAnimal).exec()

    return consultaAnimal
    // switch (parametroBuscaAnimal) {
    //     case "idTutor":
    //         const idTutorBusca = valorBuscaAnimal
    //         const queryIdTutor = bancoAnimal.findOne({idTutorBusca}).exec()
    //             return queryIdTutor
    //         break;
    //     case "nome":
    //         const  nomeAnimalBusca = valorBuscaAnimal
    //         const queryNomeAnimal = bancoAnimal.finfindOned({nomeAnimalBusca})
    //             return queryNomeAnimal
    //     break;
    //     default : return "Houve um problema aqui no => buscaAnimalBanco()"
    //         break;
    // }

 }

 export async function buscaAnimalNomeAnimalBanco (nomeAnimalEmviado){
    
    
    let regex = new RegExp(nomeAnimalEmviado,'i')
   
    const consultaNomeAnimal = await bancoAnimal.find( { "nomeAnimal" : {$in : regex} }).exec()
    return consultaNomeAnimal
 }

 export async function buscaAnimalIdTutorBanco (idTutor) {
    const parametroBuscaAnimalIdTutorBanco = {idTutor}
    const consultaAnimalIdtutor = await bancoAnimal.find(parametroBuscaAnimalIdTutorBanco)
    return consultaAnimalIdtutor
 }

 export async function alteraAnimalBanco(animal) {
    const parametroBuscaAlteracao =  {idAnimal: animal.idAnimal}
    const AlteracaoAnimal = await bancoAnimal.findOneAndUpdate(parametroBuscaAlteracao, animal).exec()
    return AlteracaoAnimal
 }