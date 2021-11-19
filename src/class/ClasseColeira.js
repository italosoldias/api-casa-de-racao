import Item from "./ClassItem.js";

class Coleira extends Item{

    constructor(_id, descricao,  valorCompra, marca,  categoria, tipo, codigoDeBarras,tamanho){
        super(_id, descricao,  valorCompra, marca,  categoria, codigoDeBarras,tamanho ) 
        
        this.tipo = tipo
    }
}

export default  Coleira