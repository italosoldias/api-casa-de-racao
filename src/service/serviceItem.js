import ItemBancoMongo from '../database/schemaEstoque.js'
import RacaoClasse from '../class/ClassRacao.js'; 
import ColeiraClasse from'../class/ClasseColeira.js'; 

const item = new ItemBancoMongo()
const valor = 0
const valorTalSacola =  0
const sacolaAtual = { "itensNaSacola" : [], "valorTotal": valorTalSacola};



     

export async function addItem(itemAdicionado, reqAdiciona, res){


        //to pegando a propriedade da chave do que esta vindo no body
        const keyAdicionarItem = Object.keys(reqAdiciona.body)
        const keySelectAdicionar = keyAdicionarItem.filter(codigoDeBarras => codigoDeBarras === "codigoDeBarras" )
        
        const valorAdicionar = itemAdicionado.codigoDeBarras
        const existeItem = await  buscarItemCodigoDeBarras( keySelectAdicionar[0] , valorAdicionar)
       // console.log(existeItem)
        if(existeItem != null || undefined){ 
            throw new Error ('Esse codigo de barras já existe !!! '  )
            
        } else {
           
           const insert =  item.addItemBanco(itemAdicionado)
            return insert
         } 
        // const existeColeira = await this.buscarColeira(coleira.codigoDeBarras)
        // if(existeColeira) {   throw new Error('esse codigoDeBarras ja existe');  }

    };

    export async function adicionarItemSacolaService (itemParaSacola, req, res){

        
        const buscaItemParaSacola =  await buscarItemCodigoDeBarras('codigoDeBarras', itemParaSacola.codigoDeBarrasItemSacola)       
        
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
            for (let index = 0; index <=  sacolaAtual['itensNaSacola'].length; index++) {
                const element = sacolaAtual.itensNaSacola.length;
                //const contadorItem  =   "item"+ index 
                const increment = element 
                //console.log(increment)
                const totalItensSacola = sacolaAtual.itensNaSacola
                const empurraSacola = sacolaAtual['itensNaSacola'].push({[increment] :  itemSacolaMomento})
                somaValorTotalSacola(null,null,totalItensSacola[increment][increment])
                 break;
            }

            
             //   const somar =  this.sacolaAtual.valorTotal + itemSacolaMomento.valorTotalItem
             
            return sacolaAtual 
            
            

            
        }
       // 

       // console.log(buscaItemParaSacola)
    }
    export async function somaValorTotalSacola (req, res, itemMontado){
        
        const somar =  sacolaAtual.valorTotal + itemMontado.valorTotalItem
       return sacolaAtual.valorTotal = somar 

        

        // const valores =  Number( 
        //  const soma =   + valores
        //  this.valor = soma
        //  return console.log(soma)
        

    }

    export async function buscarTodosItens(req) {

        const queryTodosItens = await item.buscarTodosItensBanco(req)
        return queryTodosItens
    }

    export async function buscarItemCodigoDeBarras(paranBusca, valorBusca){

        const retornoItem =  await item.buscarItemBanco(paranBusca, valorBusca)
          return retornoItem
    };

    export async function adicionaQuantidadeItem(itemQuantidadeAlteração, reqAteracaoQuantidade){

        const keyQuantidadeAlteracaoItem = Object.keys(reqAteracaoQuantidade.body)
        const keySelectQuantidadeAlteracao = keyQuantidadeAlteracaoItem.filter(codigoDeBarras => codigoDeBarras === "codigoDeBarras" )
        console.log()
        const valorQuantidadeAlteracao = itemQuantidadeAlteração.codigoDeBarras
        const verificaCodigoDeBarrasItemAlteracao = await  buscarItemCodigoDeBarras( keySelectQuantidadeAlteracao[0] , valorQuantidadeAlteracao)

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
            item.alterarCadastroItemBanco(itemAlteraValor)
            //this.item.alterarCadastroItemBanco(itemAlteracao)

            console.log(itemAlteraValor)
        }

    }

    export async function alterarItem(itemAlteracao, reqAlteracao){
        const keyAlteracaoItem = Object.keys(reqAlteracao.body)
        const keySelectAlteracao = keyAlteracaoItem.filter(codigoDeBarras => codigoDeBarras === "codigoDeBarras" )
        console.log()
        const valorAlteracao = itemAlteracao.codigoDeBarras
        const verificaItemAlteracao = await  buscarItemCodigoDeBarras( keySelectAlteracao[0] , valorAlteracao)

        if (!verificaItemAlteracao){ 
            throw new Error ('O item com esse codigo de barras ' + valorAlteracao + ' não exste !!!' )
        } else {
            item.alterarCadastroItemBanco(itemAlteracao)
        }

    };




