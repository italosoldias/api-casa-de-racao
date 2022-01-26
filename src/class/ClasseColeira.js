import Item from "./ClassItem.js";

class Coleira extends Item{

    constructor(_id, descricao,  valorCompra, marca,  categoria, tipo, codigoDeBarras,tamanho, tipoColeira){
        super(_id, descricao,  valorCompra, marca,  categoria, tipo ,codigoDeBarras,tamanho ) 
        
        this.tipoColeira = tipoColeira
    }
}

export default  Coleira