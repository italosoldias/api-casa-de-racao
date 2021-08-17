import express from 'express';
import mongoose from'mongoose';
import ManegeDB from './database/ManegeDB.js';
import rotasUsuarios from './route/rotasUsuarios.js';
import rotasEstoque from './route/rotasEstoque.js';

class Server{

    constructor(){
        this.app = express();
       

        
    }

    start(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended : false}));

        this.app.use('/', rotasEstoque )
        this.app.use('/', rotasUsuarios )

//require('./controladores/autoControlador.js')(app);


        this.app.listen(3000)
    }
}

export default   Server

//ManegeDB.conectar()



