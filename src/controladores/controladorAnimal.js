import { adicionaAnimalService, buscaAnimalService } from "../service/servicoAnimal.js";


export async function adicionaAnimalControlador(req,res){

    const animalRecebido = {
        idAnimal: req.body.idAnimal,
        idTutor: req.body.idTutor,
        nomeAnimal: req.body.nomeAnimal,
        peso: req.body.peso,
        raca: req.body.raca,
        especie: req.body.especie

    }

    try {
        await adicionaAnimalService (animalRecebido)
        res.json(animalRecebido)
    } catch (error) {
        return  res.status(400).send({Erro: "hove um problema " + error.message })
    }
}

export async function buscaAnimalControlador (req, res) {

   
    const consultaReqAnimal = await buscaAnimalService(req.query)
    res.json(consultaReqAnimal)
}