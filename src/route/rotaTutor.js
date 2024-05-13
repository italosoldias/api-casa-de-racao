import express from 'express';
import { adicionarTutorControlador , alteraTutorControlador, buscarTutorControlador} from '../controladores/controladorTutor.js';
const rotaTutor = express.Router()

function carregaRotaTutor(){

    rotaTutor.post('/tutor', adicionarTutorControlador)
    rotaTutor.get('/tutor:id',buscarTutorControlador)
    rotaTutor.put('/tutor', alteraTutorControlador)

}

carregaRotaTutor()

export {rotaTutor}