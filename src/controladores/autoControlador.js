
const express = require('express');

const Usuario = require('../model/usuarios.js');
const router= express.Router();

router.post('/registo', async function (req, res)  {
    try {
        const usuario = await Usuario.create(req.body);

        return res.send({ usuario });
    } catch (err) {
        const MsErro = err.errors
        
        console.log(MsErro)
        return res.status(400).send( {  MsErro ,  error : 'registro errado', })
    }

} )

module.exports = app => app.use('/auth', router);