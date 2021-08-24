//import { json } from "body-parser"

const cotainer = document.getElementById('tela')

function telaPrincipal (){

    return( 
    
    <div>
        <h2> Informe seus dados</h2>
        <form id="formulario" action="http://localhost:3000/usuario" method="POST" >
        <input type="text" id="nome" for="nome" placeholder="digite seu nome" name="nome" ></input>
        <input type="email" id="email" for="email" placeholder="digite seu email" name="email" ></input>
        <input type="password" id="senha" for="senha" placeholder="digite sua senha" name="senha" ></input>
        <button type="submit" onclick="novaTela()" >SALVAR USUARIO</button>
        </form>
    </div>)
}

ReactDOM.render(
    React.createElement(telaPrincipal ),cotainer)

React.createElement("h2")    

function novaTela(req , res){
    console.log('sera q to sendo chamado?')
    const resposta = res.head
    const respostaTratada = JSON.parse(resposta)
    const nome = respostaTratada.usuarioLT.nome

    return(<div><h1>${nome}</h1></div>)

    
}

ReactDOM.render(
    React.createElement(novaTela),<body></body>)



