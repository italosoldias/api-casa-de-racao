import Item from "./ClassItem.js";

class Coleira extends Item{

    constructor(_id, descricao,  valorCompra, marca,  categoria, tamanho, tipo, codigoDeBarras){
        super(_id, descricao,  valorCompra, marca,  categoria,codigoDeBarras ) 
        this.tamanho = tamanho
        this.tipo = tipo
    }
}

export default  Coleira