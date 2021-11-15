class Item {
    constructor(_id, descricao,  valorCompra, marca, categoria, codigoDeBarras){
        
        this._id = _id
        this.descricao = descricao
        
        this.valorCompra = valorCompra
        this.marca = marca
        this.categoria = categoria
        this.codigoDeBarras= codigoDeBarras
    }
}

export default  Item