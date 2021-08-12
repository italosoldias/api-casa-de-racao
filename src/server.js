const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const rotasUsuartios = require('./route/rotasUsuarios.js')
const rotasEstoque = require('./route/rotasEstoque.js');
const app = express();

mongoose.connect('mongodb://localhost:27017/apiCasaDeRacao' );


app.use(express.json());
app.use(express.urlencoded({ extended : false}));

app.use('/', rotasEstoque )
app.use('/', rotasUsuartios )

//require('./controladores/autoControlador.js')(app);


app.listen(3000)

