import express from 'express';
import mongoose from'mongoose';
import bodyParser  from'body-parser';
import cors from 'cors'
import ManegeDB from './database/ManegeDB.js';
import {routerUsuario} from './route/rotasUsuarios.js';
import {routerEstoque} from './route/rotasEstoque.js';
import {rotaAnimal} from './route/rotasAnimal.js'
import { rotaTutor } from './route/rotaTutor.js';
import dotenv from 'dotenv/config.js'
import RotaAutenticacao from './route/rotaAutenticacao.js';

const app = express();

export default function start () {
        app.use(bodyParser.urlencoded({ limit: '500mb'}))
        app.use(cors())
        app.use(express.json());
        app.use(express.urlencoded({ extended : false}));
        app.listen(process.env.SERVICE_PORTA)
        //this.app.use(RotaAutenticacao)
        app.use('/', routerUsuario )
        app.use('/', rotaAnimal  )
        app.use('/',rotaTutor)
        // app.use('/',RotaAutenticacao, routerEstoque )
        app.use('/', routerEstoque)

}



// class Server{

//     constructor(){
//         this.app = express();
        
        
//     }

//     start(){
//         console.log()

//         this.app.use(express.json());
//         this.app.use(express.urlencoded({ extended : false}));
//         //this.app.use(RotaAutenticacao)
//         this.app.use('/', rotasUsuarios )
//         this.app.use('/',RotaAutenticacao, rotasEstoque )
        

// //require('./controladores/autoControlador.js')(app);


//         this.app.listen(process.env.SERVICE_PORTA)
//     }
// }

// export default   Server

//ManegeDB.conectar()



