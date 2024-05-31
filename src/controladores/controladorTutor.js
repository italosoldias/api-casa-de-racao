import { adicionaTutorService, alteraTutorService, buscaTutorService } from "../service/serviceTutor.js";


export async function adicionarTutorControlador(req,res){

    const tutor = {
        idTutor : req.body.idTutor,
        nomeTutor : req.body.nomeTutor,
        email : req.body.email,
        senha : req.body.senha
    }
    
    console.log(tutor)
    

    try {
        const adiciona = await adicionaTutorService(tutor)
        res.json(adiciona)
    } catch (error) {
        console.log(error)
        return  res.status(400).send({Erro: "hove um problema " + error.message })
    }
    
}


export async function buscarTutorControlador(req,res){
    
    const busca = await buscaTutorService(req.query)
    busca.senha = undefined
    res.send(busca)
}

export async function alteraTutorControlador(req,res){

    try {
        const altereTutor = await alteraTutorService(req.body)
        return res.send({mensagem : 'tutor alterado'})
    } catch (error) {
        res.status(400).send({erro : error.message })
    }
}