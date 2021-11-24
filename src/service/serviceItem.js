import ItemBancoMongo from '../database/schemaItem.js'
import RacaoClasse from '../class/ClassRacao.js'; 
import ColeiraClasse from'../class/ClasseColeira.js'; 


class ItemService {
    constructor() {
    
        this.item = new ItemBancoMongo()
    };

    async addItem(item){


        // const existeColeira = await this.buscarColeira(coleira.codigoDeBarras)
        // if(existeColeira) {   throw new Error('esse codigoDeBarras ja existe');  }


        this.item.addItem(item.body)
       

        
    };
}

export default ItemService