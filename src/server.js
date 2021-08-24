import express from 'express';
import mongoose from'mongoose';
import ManegeDB from './database/ManegeDB.js';
import rotasUsuarios from './route/rotasUsuarios.js';
import rotasEstoque from './route/rotasEstoque.js';
import dotenv from 'dotenv/config.js'
import RotaAutenticacao from './route/rotaAutenticacao.js';
class Server{

    constructor(){
        this.app = express();
        
        
    }

    start(){
        console.log()

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended : false}));
        //this.app.use(RotaAutenticacao)
        this.app.use('/', rotasUsuarios )
        this.app.use('/',RotaAutenticacao, rotasEstoque )
        

//require('./controladores/autoControlador.js')(app);


        this.app.listen(process.env.SERVICE_PORTA)
    }
}

export default   Server

//ManegeDB.conectar()



