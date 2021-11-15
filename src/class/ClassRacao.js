import Item from './ClassItem.js';


class Racao extends Item {
    constructor(_id,descricao,  valorCompra, marca, categoria, sabor, validade,tipo, codigoDeBarras){
        super(_id, descricao,  valorCompra, marca,  categoria, codigoDeBarras) 
        this.sabor = sabor;
        this.validade = validade
        this.tipo = tipo
       
        
       
       
    }

    
}

console.log(Racao)

export default  Racao