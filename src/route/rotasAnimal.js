import express from 'express';
import { alterarAnimalControlador,buscaeexibeimagemanimal,adicionaAnimalControlador, buscaAnimalControlador } from '../controladores/controladorAnimal.js';

const rotaAnimal = express.Router()

function  carregaRotaAnimal(){

    rotaAnimal.post("/animal", adicionaAnimalControlador)
    rotaAnimal.get("/animal:id" , buscaAnimalControlador)
    rotaAnimal.get("/imagem/id" , buscaeexibeimagemanimal)
    rotaAnimal.put("/animal", alterarAnimalControlador)
    
}

carregaRotaAnimal()

export {rotaAnimal}