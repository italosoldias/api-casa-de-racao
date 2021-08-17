import Item from "./ClassItem.js";

class Coleira extends Item{

    constructor(_id, descricao,  valorCompra, marca,  categoria, tamanho, tipo){
        super(_id, descricao,  valorCompra, marca,  categoria) 
        this.tamanho = tamanho
        this.tipo = tipo
    }
}

export default  Coleira