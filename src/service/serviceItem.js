import ItemBancoMongo from '../database/schemaItem.js'
import RacaoClasse from '../class/ClassRacao.js'; 
import ColeiraClasse from'../class/ClasseColeira.js'; 


class ItemService {
    constructor() {
    
        this.item = new ItemBancoMongo()
        this.valor = 0
        this.valorTalSacola =  0
        this.sacolaAtual = { "itensNaSacola" : [], "valorTotal": this.valorTalSacola};
        // this.somarTotal = function (valor1, valor2) {
         
        //     return 
        // }

        
    };

     

    async addItem(itemAdicionado, reqAdiciona, res){


        //to pegando a propriedade da chave do que esta vindo no body
        const keyAdicionarItem = Object.keys(reqAdiciona.body)
        const keySelectAdicionar = keyAdicionarItem.filter(codigoDeBarras => codigoDeBarras === "codigoDeBarras" )
        
        const valorAdicionar = itemAdicionado.codigoDeBarras
        const existeItem = await  this.buscarItemCodigoDeBarras( keySelectAdicionar[0] , valorAdicionar)
       // console.log(existeItem)
        if(existeItem != null || undefined){ 
            throw new Error ('Esse codigo de barras já existe !!! '  )
            
        } else {
           
           const insert =  this.item.addItemBanco(itemAdicionado)
            return insert
         } 
        // const existeColeira = await this.buscarColeira(coleira.codigoDeBarras)
        // if(existeColeira) {   throw new Error('esse codigoDeBarras ja existe');  }

    };

    async adicionarItemSacolaService (itemParaSacola, req, res){

        
        const buscaItemParaSacola =  await this.buscarItemCodigoDeBarras('codigoDeBarras', itemParaSacola.codigoDeBarrasItemSacola)       
        
        console.log(buscaItemParaSacola)
        if(buscaItemParaSacola == null || undefined){ 
            throw new Error ('O item com esse codigo de barras ' + itemParaSacola.codigoDeBarrasItemSacola + ' não exste !!!' )

        } else if (itemParaSacola.quantidadeItemSacola > buscaItemParaSacola.quantidade  ) { 
            throw new Error ('Não posso adicionar essa quantidade ' )
            
        } else {
            const valoresItem =  buscaItemParaSacola.valorCompra * itemParaSacola.quantidadeItemSacola 
            const itemSacolaMomento = {
                descricao : buscaItemParaSacola.descricao,
                categoria : buscaItemParaSacola.categoria,
                codigoDeBarras : buscaItemParaSacola.codigoDeBarras,
                quantidadeItemSacolaMomento : itemParaSacola.quantidadeItemSacola,
                valorPorItem : buscaItemParaSacola.valorCompra,
                valorTotalItem : Number(valoresItem) 
            }
            

            //const sacolaAtual = { "itens" : []}
            for (let index = 0; index <=  this.sacolaAtual['itensNaSacola'].length; index++) {
                const element = this.sacolaAtual.itensNaSacola.length;
                //const contadorItem  =   "item"+ index 
                const increment = element 
                //console.log(increment)
                const totalItensSacola = this.sacolaAtual.itensNaSacola
                const empurraSacola = this.sacolaAtual['itensNaSacola'].push({[increment] :  itemSacolaMomento})
                this.somaValorTotalSacola(null,null,totalItensSacola[increment][increment])
                 break;
            }

            
             //   const somar =  this.sacolaAtual.valorTotal + itemSacolaMomento.valorTotalItem
             
            return this.sacolaAtual 
            
            

            
        }
       // 

       // console.log(buscaItemParaSacola)
    }
    async somaValorTotalSacola (req, res, itemMontado){
        
        const somar =  this.sacolaAtual.valorTotal + itemMontado.valorTotalItem
       return this.sacolaAtual.valorTotal = somar 

        

        // const valores =  Number( 
        //  const soma =   + valores
        //  this.valor = soma
        //  return console.log(soma)
        

    }

    async buscarTodosItens(req) {

        const queryTodosItens = await this.item.buscarTodosItensBanco(req)
        return queryTodosItens
    }

    async buscarItemCodigoDeBarras(paranBusca, valorBusca){

        const retornoItem =  await this.item.buscarItemBanco(paranBusca, valorBusca)
          return retornoItem
    };

    async adicionaQuantidadeItem(itemQuantidadeAlteração, reqAteracaoQuantidade){

        const keyQuantidadeAlteracaoItem = Object.keys(reqAteracaoQuantidade.body)
        const keySelectQuantidadeAlteracao = keyQuantidadeAlteracaoItem.filter(codigoDeBarras => codigoDeBarras === "codigoDeBarras" )
        console.log()
        const valorQuantidadeAlteracao = itemQuantidadeAlteração.codigoDeBarras
        const verificaCodigoDeBarrasItemAlteracao = await  this.buscarItemCodigoDeBarras( keySelectQuantidadeAlteracao[0] , valorQuantidadeAlteracao)

        if(!verificaCodigoDeBarrasItemAlteracao){
            throw new Error ('O item com esse codigo de barras ' + valorQuantidadeAlteracao + ' não exste !!!' )
        } else {

            const quantidadeQueryBanco = verificaCodigoDeBarrasItemAlteracao.quantidade
            const quantidadeItemReq = itemQuantidadeAlteração.quantidade
            const somaItem = quantidadeQueryBanco+quantidadeItemReq

            const itemAlteraValor = {
                "quantidade" : somaItem,
                "codigoDeBarras": verificaCodigoDeBarrasItemAlteracao.codigoDeBarras
            }
            this.item.alterarCadastroItemBanco(itemAlteraValor)
            //this.item.alterarCadastroItemBanco(itemAlteracao)

            console.log(itemAlteraValor)
        }

    }

    async alterarItem(itemAlteracao, reqAlteracao){
        const keyAlteracaoItem = Object.keys(reqAlteracao.body)
        const keySelectAlteracao = keyAlteracaoItem.filter(codigoDeBarras => codigoDeBarras === "codigoDeBarras" )
        console.log()
        const valorAlteracao = itemAlteracao.codigoDeBarras
        const verificaItemAlteracao = await  this.buscarItemCodigoDeBarras( keySelectAlteracao[0] , valorAlteracao)

        if (!verificaItemAlteracao){ 
            throw new Error ('O item com esse codigo de barras ' + valorAlteracao + ' não exste !!!' )
        } else {
            this.item.alterarCadastroItemBanco(itemAlteracao)
        }

    };


}

export default ItemService