import mongoose from 'mongoose'

class ManegeDB {

    

  static async conectar(){
        await mongoose.connect(process.env.MONGODB_URL,
        { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false }).catch((err)=>{
        console.log( `ERRO NA CONEXÃO : ${err}`)
    })
        console.log('CONECTADO')
    }

    static async desconectar(){
        await mongoose.connection.close().catch((err)=> {
        console.log( `ERRO ao fechar : ${err}` )
        }) 
        console.log('desconectado')
    } 
}

export default   ManegeDB