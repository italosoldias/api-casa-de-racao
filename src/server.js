const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended : false}));

app.use('/', require('./route/rotas.js'))
require('./controladores/autoControlador.js')(app);


app.listen(3000)

