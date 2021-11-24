class Item {
    constructor(_id, descricao,  valorCompra, marca, categoria,tipo , codigoDeBarras, tamanho){
        
        this._id = _id
        this.descricao = descricao
        
        this.valorCompra = valorCompra
        this.marca = marca
        this.categoria = categoria
        this.tipo = tipo
        this.codigoDeBarras= codigoDeBarras
        this.tamanho = tamanho
    }
}

export default  Item