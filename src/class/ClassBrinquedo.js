import Item from "./ClassItem";

class Brinquedo extends Item {
    constructor(_id, descricao,  
        valorCompra, 
        marca,  
        categoria, 
        tamanho, 
        tipo, 
        codigoDeBarras){
            super(_id, descricao, valorCompra,marca,  categoria, tamanho, codigoDeBarras ),
            this.tipo = tipo
        }
    

}

export default  Brinquedo