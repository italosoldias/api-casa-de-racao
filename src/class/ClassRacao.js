import Item from "./ClassItem.js";


class Racao extends Item {
    constructor(_id,descricao,  valorCompra, marca, categoria, tipo, codigoDeBarras, sabor, validade,){
        super(_id, descricao,  valorCompra, marca,  categoria, tipo, codigoDeBarras) 
        this.sabor = sabor;
        this.validade = validade
        
       
        
       
       
    }

    
}

console.log(Racao)

export default  Racao