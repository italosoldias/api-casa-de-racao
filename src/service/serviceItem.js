import ItemBancoMongo from '../database/schemaItem.js'
import RacaoClasse from '../class/ClassRacao.js'; 
import ColeiraClasse from'../class/ClasseColeira.js'; 


class ItemService {
    constructor() {
    
        this.item = new ItemBancoMongo()
    };

    async addItem(item, req, res){

        //to pegando a propriedade da chave do que esta vindo no body
        const keys = Object.keys(req.body)
        const keySelect = keys.filter(codigoDeBarras => codigoDeBarras === "codigoDeBarras" )
        console.log()
        const valor = item.codigoDeBarras
        const existeItem = await  this.buscarItemCodigoDeBarras( keySelect[0] , valor)
        console.log(existeItem)
        if(existeItem ){ throw new Error ('Esse codigo de barras já existe !!! '  )
            
        } else {
          const insert =  this.item.addItemBanco(item)
            return insert
         } 
        // const existeColeira = await this.buscarColeira(coleira.codigoDeBarras)
        // if(existeColeira) {   throw new Error('esse codigoDeBarras ja existe');  }

        

        
       

        
    };

    async buscarItemCodigoDeBarras(paranBusca, valorBusca){



        const retornoItem =  await this.item.buscarItemBanco(paranBusca, valorBusca)
          return retornoItem
    };

    alterarItem(item){
        this.item.alterarItemBanco(item)
    };


}

export default ItemService