const express = require('express');
const mongoose = require ('mongoose');
const ManegeDB = require('./database/ManegeDB.js')
const bodyParser = require('body-parser');
const rotasUsuarios = require('./route/rotasUsuarios.js')
const rotasEstoque = require('./route/rotasEstoque.js');

class Server{

    constructor(){
        this.app = express();
        ManegeDB.conectar()

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended : false}));

        this.app.use('/', rotasEstoque )
        this.app.use('/', rotasUsuarios )

//require('./controladores/autoControlador.js')(app);


        this.app.listen(3000)
    }
}

new Server()





