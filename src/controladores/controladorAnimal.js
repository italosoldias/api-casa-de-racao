import { json } from "express";
import { adicionaAnimalService, buscaAnimalService,altereAnimalService } from "../service/servicoAnimal.js";
// import { adicionarhtm } from "../telas.js";
import {Base64} from "js-base64"
var base64banco
export async function adicionaAnimalControlador(req,res){

    // salvar com base64 e depois no front decodficar de base64 para png
    
    const animalRecebido = {
        idAnimal: req.body.idAnimal,
        idTutor: req.body.idTutor,
        nomeAnimal: req.body.nomeAnimal,
        peso: req.body.peso,
        idade: req.body.idade,
        raca: req.body.raca,
        especie: req.body.especie,
        imagem: req.body.imagem,
        anexos: req.body.anexos

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


export async function buscaeexibeimagemanimal(req, res){

    const __dirname = "D:/desenvolvimento/api-casa-de-racao/src/"
    const consultando = await buscaAnimalService({idAnimal:4184741})     
    
    console.log(consultando.imagem)
    console.log("=============================")
    var docodificado = `data:image/png;base64,${consultando.imagem}`
//     const base64String = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAACoCAYAAACLxUITAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQnSURBVHhe7dvBaxRXAMdx/xzpooRIF4NUU7O0UUNqRbEoJctigm4RQhuzJktWLAYSGmhzCWwhxYMlh0IhhEKoh+KpFBF6KB5KaA82IFR6CBQSEH59u5Mluzuvm7I0Pw9+Dx+SmfdmId95eTuXOXT4jaxwsIhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAaHsn1nhIP1Wqzk2h8aO+9CZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIKUXNr6xrbbXNyqLyYXz+4ab+/PlB/ff8wjda+/Je5DNaETllUT9uSdvPf9fGr02erGoijDdHnv8pTPxtNfIZrYickkTe+DY21ioWOZcvaeJ2SfnBvXNETukcuTlsa+Rxff1LOH65o+2/d8LPLT19MF4fI3JKEvnZ+kxYkXvGLiXj/xY5/92m9NdjfbE7L7fwWFsvN7V2jcgRSWRtJyuy4elKMh6PXNT3f4Qb8/Be041Z1KPnyX8EkVO62S7iN6Zxc4ic0k3k3ZW8er5lbgORU7qJHNmTJ9a1sfVCjxaIHNFd5NrTxVdPXoSnirBrhG1C2tGzHxaVC2NE/r8NFnXz9rjebzpHZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBbz8ZsJINiGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDI7bJX9c75m3ED5+LX7IPI7fonNHJ9NvFxVZXKkkYbx5c+iF+zDyJ3MjSnSmla2chYpvecet7MKRMZa0fkTmKRMxc1NF5V+c6yJmeWVS5/rqGTfWHsLZ24VtVU8cZu+H69fX1ZU2MFIncUiXw8n4TsySTHR8KcqemKjtfGMwV9OFPV5dMh+umKPpmZ1akwj8idpCJf1eVyVVferW0VDWMh7JIunEjmZM6G6KU5jUxWNXK2v36OyJ2kIt9Q4dP7KofVOhli7wlbRl9jzrDeu3VflVslHdu9jsidRFfyki6ebJrT5sjwZ/WVXCgtqzCcq58jcif/YU/O9E/ro/KsBo6G496w0lv25DkN9BK5s0jkw5lhnSmGp4u7ydNF5e6SrgzWVmxOA8XwNDFa2J3bp1Oj4TjcECJ362hOPceSL7b9ENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhswCtmBq/FSn7ViGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhswOsMBkQ2YLswILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgHLqt/ANQNqqxMsJCAAAAAAElFTkSuQmCC'; // Your Base64 string
// const imageDataURL = Base64.fromBase64(base64String);
    // const binaryData = await Base64.decode("iVBORw0KGgoAAAANSUhEUgAAAFkAAACoCAYAAACLxUITAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQnSURBVHhe7dvBaxRXAMdx/xzpooRIF4NUU7O0UUNqRbEoJctigm4RQhuzJktWLAYSGmhzCWwhxYMlh0IhhEKoh+KpFBF6KB5KaA82IFR6CBQSEH59u5Mluzuvm7I0Pw9+Dx+SmfdmId95eTuXOXT4jaxwsIhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAaHsn1nhIP1Wqzk2h8aO+9CZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIKUXNr6xrbbXNyqLyYXz+4ab+/PlB/ff8wjda+/Je5DNaETllUT9uSdvPf9fGr02erGoijDdHnv8pTPxtNfIZrYickkTe+DY21ioWOZcvaeJ2SfnBvXNETukcuTlsa+Rxff1LOH65o+2/d8LPLT19MF4fI3JKEvnZ+kxYkXvGLiXj/xY5/92m9NdjfbE7L7fwWFsvN7V2jcgRSWRtJyuy4elKMh6PXNT3f4Qb8/Be041Z1KPnyX8EkVO62S7iN6Zxc4ic0k3k3ZW8er5lbgORU7qJHNmTJ9a1sfVCjxaIHNFd5NrTxVdPXoSnirBrhG1C2tGzHxaVC2NE/r8NFnXz9rjebzpHZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBbz8ZsJINiGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDI7bJX9c75m3ED5+LX7IPI7fonNHJ9NvFxVZXKkkYbx5c+iF+zDyJ3MjSnSmla2chYpvecet7MKRMZa0fkTmKRMxc1NF5V+c6yJmeWVS5/rqGTfWHsLZ24VtVU8cZu+H69fX1ZU2MFIncUiXw8n4TsySTHR8KcqemKjtfGMwV9OFPV5dMh+umKPpmZ1akwj8idpCJf1eVyVVferW0VDWMh7JIunEjmZM6G6KU5jUxWNXK2v36OyJ2kIt9Q4dP7KofVOhli7wlbRl9jzrDeu3VflVslHdu9jsidRFfyki6ebJrT5sjwZ/WVXCgtqzCcq58jcif/YU/O9E/ro/KsBo6G496w0lv25DkN9BK5s0jkw5lhnSmGp4u7ydNF5e6SrgzWVmxOA8XwNDFa2J3bp1Oj4TjcECJ362hOPceSL7b9ENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhswCtmBq/FSn7ViGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhswOsMBkQ2YLswILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgHLqt/ANQNqqxMsJCAAAAAAElFTkSuQmCC");
    
    const htmlfunc = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <img id="imageDisplay" src="${docodificado}" alt="Base64 Image">
    </body>
    </html>`


    
    res.set('Content-Type', 'text/html')
    res.send(htmlfunc)
   
}



export async function alterarAnimalControlador (req, res){

    
    try {
        const altereAnimal = await altereAnimalService(req.body)
        return res.send({mensagem : 'animal alterado'})
    } catch (error) {
        res.status(400).send({erro : error.message })
    }

    
}




