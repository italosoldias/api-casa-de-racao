import express from 'express';
import { adicionaAnimalControlador, buscaAnimalControlador } from '../controladores/controladorAnimal.js';

const rotaAnimal = express.Router()

function  carregaRotaAnimal(){

    rotaAnimal.post("/animal", adicionaAnimalControlador)
    rotaAnimal.get("/animal:id" , buscaAnimalControlador)
    
}

carregaRotaAnimal()

export {rotaAnimal}