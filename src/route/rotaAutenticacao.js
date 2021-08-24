import express from 'express';
import  jsonWebToken  from "jsonWebToken"
import { Http2ServerRequest } from 'http2';
const tk = "548500933265f234caec46fb5f29da69"



 export default (req, res, next) => {
    const autorizacaoHeader = req.headers.token

    if(!autorizacaoHeader){
        return res.status(401).send({erro: 'token não informado'})
    }
    
    const parts = autorizacaoHeader.split(' ')

    if (!parts.length === 2){
        return res.status(401).send({erro: 'tokem errado'})
    }

    const [verificacao, token ] = parts

    if(!/^Bearer$/i.test(verificacao)){
        return res.status(401).send({erro: ' token mal formatado'})
    }

     jsonWebToken.verify(token, tk, (err, decoded) => {
        if(err){
            return res.status(401).send({erro: 'token invalido'})
        }
    req.autenticUsuario= decoded._id    
        return next()
    })
}