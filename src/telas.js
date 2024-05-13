// // //import { json } from "body-parser"

// import {Base64} from "js-base64"
// // // const Base64 = require('js-base64').Base64;
// // function aciona(){

// //     const base64String = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAACoCAYAAACLxUITAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQnSURBVHhe7dvBaxRXAMdx/xzpooRIF4NUU7O0UUNqRbEoJctigm4RQhuzJktWLAYSGmhzCWwhxYMlh0IhhEKoh+KpFBF6KB5KaA82IFR6CBQSEH59u5Mluzuvm7I0Pw9+Dx+SmfdmId95eTuXOXT4jaxwsIhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAaHsn1nhIP1Wqzk2h8aO+9CZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIKUXNr6xrbbXNyqLyYXz+4ab+/PlB/ff8wjda+/Je5DNaETllUT9uSdvPf9fGr02erGoijDdHnv8pTPxtNfIZrYickkTe+DY21ioWOZcvaeJ2SfnBvXNETukcuTlsa+Rxff1LOH65o+2/d8LPLT19MF4fI3JKEvnZ+kxYkXvGLiXj/xY5/92m9NdjfbE7L7fwWFsvN7V2jcgRSWRtJyuy4elKMh6PXNT3f4Qb8/Be041Z1KPnyX8EkVO62S7iN6Zxc4ic0k3k3ZW8er5lbgORU7qJHNmTJ9a1sfVCjxaIHNFd5NrTxVdPXoSnirBrhG1C2tGzHxaVC2NE/r8NFnXz9rjebzpHZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBbz8ZsJINiGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDI7bJX9c75m3ED5+LX7IPI7fonNHJ9NvFxVZXKkkYbx5c+iF+zDyJ3MjSnSmla2chYpvecet7MKRMZa0fkTmKRMxc1NF5V+c6yJmeWVS5/rqGTfWHsLZ24VtVU8cZu+H69fX1ZU2MFIncUiXw8n4TsySTHR8KcqemKjtfGMwV9OFPV5dMh+umKPpmZ1akwj8idpCJf1eVyVVferW0VDWMh7JIunEjmZM6G6KU5jUxWNXK2v36OyJ2kIt9Q4dP7KofVOhli7wlbRl9jzrDeu3VflVslHdu9jsidRFfyki6ebJrT5sjwZ/WVXCgtqzCcq58jcif/YU/O9E/ro/KsBo6G496w0lv25DkN9BK5s0jkw5lhnSmGp4u7ydNF5e6SrgzWVmxOA8XwNDFa2J3bp1Oj4TjcECJ362hOPceSL7b9ENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhswCtmBq/FSn7ViGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhswOsMBkQ2YLswILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgHLqt/ANQNqqxMsJCAAAAAAElFTkSuQmCC'; // Your Base64 string
// //    const imageDataURL = Base64.fromBase64(base64String);
// //     const doc = document.getElementById("di")
// //    doc.src(imageDataURL);
// //     // imgElement.src = imageDataURL;
// //     // imgElement.alt = 'Base64 Image';
// //     // 
    
// //     document.body.appendChild(doc );
// // }
// // aciona()
// // // const cotainer = document.getElementById('tela')

// // // const base64String = 'data:image/PNG;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAACoCAYAAACLxUITAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQnSURBVHhe7dvBaxRXAMdx/xzpooRIF4NUU7O0UUNqRbEoJctigm4RQhuzJktWLAYSGmhzCWwhxYMlh0IhhEKoh+KpFBF6KB5KaA82IFR6CBQSEH59u5Mluzuvm7I0Pw9+Dx+SmfdmId95eTuXOXT4jaxwsIhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAaHsn1nhIP1Wqzk2h8aO+9CZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIKUXNr6xrbbXNyqLyYXz+4ab+/PlB/ff8wjda+/Je5DNaETllUT9uSdvPf9fGr02erGoijDdHnv8pTPxtNfIZrYickkTe+DY21ioWOZcvaeJ2SfnBvXNETukcuTlsa+Rxff1LOH65o+2/d8LPLT19MF4fI3JKEvnZ+kxYkXvGLiXj/xY5/92m9NdjfbE7L7fwWFsvN7V2jcgRSWRtJyuy4elKMh6PXNT3f4Qb8/Be041Z1KPnyX8EkVO62S7iN6Zxc4ic0k3k3ZW8er5lbgORU7qJHNmTJ9a1sfVCjxaIHNFd5NrTxVdPXoSnirBrhG1C2tGzHxaVC2NE/r8NFnXz9rjebzpHZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBbz8ZsJINiGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDI7bJX9c75m3ED5+LX7IPI7fonNHJ9NvFxVZXKkkYbx5c+iF+zDyJ3MjSnSmla2chYpvecet7MKRMZa0fkTmKRMxc1NF5V+c6yJmeWVS5/rqGTfWHsLZ24VtVU8cZu+H69fX1ZU2MFIncUiXw8n4TsySTHR8KcqemKjtfGMwV9OFPV5dMh+umKPpmZ1akwj8idpCJf1eVyVVferW0VDWMh7JIunEjmZM6G6KU5jUxWNXK2v36OyJ2kIt9Q4dP7KofVOhli7wlbRl9jzrDeu3VflVslHdu9jsidRFfyki6ebJrT5sjwZ/WVXCgtqzCcq58jcif/YU/O9E/ro/KsBo6G496w0lv25DkN9BK5s0jkw5lhnSmGp4u7ydNF5e6SrgzWVmxOA8XwNDFa2J3bp1Oj4TjcECJ362hOPceSL7b9ENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhswCtmBq/FSn7ViGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhswOsMBkQ2YLswILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgHLqt/ANQNqqxMsJCAAAAAAElFTkSuQmCC'
// // //         const binaryData = atob("iVBORw0KGgoAAAANSUhEUgAAAFkAAACoCAYAAACLxUITAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQnSURBVHhe7dvBaxRXAMdx/xzpooRIF4NUU7O0UUNqRbEoJctigm4RQhuzJktWLAYSGmhzCWwhxYMlh0IhhEKoh+KpFBF6KB5KaA82IFR6CBQSEH59u5Mluzuvm7I0Pw9+Dx+SmfdmId95eTuXOXT4jaxwsIhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAaHsn1nhIP1Wqzk2h8aO+9CZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIKUXNr6xrbbXNyqLyYXz+4ab+/PlB/ff8wjda+/Je5DNaETllUT9uSdvPf9fGr02erGoijDdHnv8pTPxtNfIZrYickkTe+DY21ioWOZcvaeJ2SfnBvXNETukcuTlsa+Rxff1LOH65o+2/d8LPLT19MF4fI3JKEvnZ+kxYkXvGLiXj/xY5/92m9NdjfbE7L7fwWFsvN7V2jcgRSWRtJyuy4elKMh6PXNT3f4Qb8/Be041Z1KPnyX8EkVO62S7iN6Zxc4ic0k3k3ZW8er5lbgORU7qJHNmTJ9a1sfVCjxaIHNFd5NrTxVdPXoSnirBrhG1C2tGzHxaVC2NE/r8NFnXz9rjebzpHZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBbz8ZsJINiGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDI7bJX9c75m3ED5+LX7IPI7fonNHJ9NvFxVZXKkkYbx5c+iF+zDyJ3MjSnSmla2chYpvecet7MKRMZa0fkTmKRMxc1NF5V+c6yJmeWVS5/rqGTfWHsLZ24VtVU8cZu+H69fX1ZU2MFIncUiXw8n4TsySTHR8KcqemKjtfGMwV9OFPV5dMh+umKPpmZ1akwj8idpCJf1eVyVVferW0VDWMh7JIunEjmZM6G6KU5jUxWNXK2v36OyJ2kIt9Q4dP7KofVOhli7wlbRl9jzrDeu3VflVslHdu9jsidRFfyki6ebJrT5sjwZ/WVXCgtqzCcq58jcif/YU/O9E/ro/KsBo6G496w0lv25DkN9BK5s0jkw5lhnSmGp4u7ydNF5e6SrgzWVmxOA8XwNDFa2J3bp1Oj4TjcECJ362hOPceSL7b9ENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhswCtmBq/FSn7ViGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhswOsMBkQ2YLswILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgHLqt/ANQNqqxMsJCAAAAAAElFTkSuQmCC")
        
// // //         const canvas = document.getElementById('myCanvas');
// // //         const ctx = canvas.getContext('2d');
// // //         const blob = new Blob([binaryData], { type: 'image/PNG' });
// // //         const imageBitmap = await createImageBitmap(blob);
// // //         ctx.drawImage(imageBitmap, 0, 0);
    

// // // function telaPrincipal (){

// // //     return( 
    
// // //     <div>
// // //         <h2> Informe seus dados</h2>
// // //         <form id="formulario" action="http://localhost:3000/usuario" method="POST" >
// // //         <input type="text" id="nome" for="nome" placeholder="digite seu nome" name="nome" ></input>
// // //         <input type="email" id="email" for="email" placeholder="digite seu email" name="email" ></input>
// // //         <input type="password" id="senha" for="senha" placeholder="digite sua senha" name="senha" ></input>
// // //         <button type="submit" onclick="novaTela()" >SALVAR USUARIO</button>
// // //         </form>
// // //     </div>)
// // // }

// // // ReactDOM.render(
// // //     React.createElement(telaPrincipal ),cotainer)

// // // React.createElement("h2")    

// // // function novaTela(req , res){
// // //     console.log('sera q to sendo chamado?')
// // //     const resposta = res.head
// // //     const respostaTratada = JSON.parse(resposta)
// // //     const nome = respostaTratada.usuarioLT.nome

// // //     return(<div><h1>${nome}</h1></div>)

    
// // // }

// // // ReactDOM.render(
// // //     React.createElement(novaTela),<body></body>)
// async function decodifica (){ 

//     const binaryData = await Base64.decode("iVBORw0KGgoAAAANSUhEUgAAAFkAAACoCAYAAACLxUITAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQnSURBVHhe7dvBaxRXAMdx/xzpooRIF4NUU7O0UUNqRbEoJctigm4RQhuzJktWLAYSGmhzCWwhxYMlh0IhhEKoh+KpFBF6KB5KaA82IFR6CBQSEH59u5Mluzuvm7I0Pw9+Dx+SmfdmId95eTuXOXT4jaxwsIhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAaHsn1nhIP1Wqzk2h8aO+9CZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIKUXNr6xrbbXNyqLyYXz+4ab+/PlB/ff8wjda+/Je5DNaETllUT9uSdvPf9fGr02erGoijDdHnv8pTPxtNfIZrYickkTe+DY21ioWOZcvaeJ2SfnBvXNETukcuTlsa+Rxff1LOH65o+2/d8LPLT19MF4fI3JKEvnZ+kxYkXvGLiXj/xY5/92m9NdjfbE7L7fwWFsvN7V2jcgRSWRtJyuy4elKMh6PXNT3f4Qb8/Be041Z1KPnyX8EkVO62S7iN6Zxc4ic0k3k3ZW8er5lbgORU7qJHNmTJ9a1sfVCjxaIHNFd5NrTxVdPXoSnirBrhG1C2tGzHxaVC2NE/r8NFnXz9rjebzpHZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBbz8ZsJINiGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDI7bJX9c75m3ED5+LX7IPI7fonNHJ9NvFxVZXKkkYbx5c+iF+zDyJ3MjSnSmla2chYpvecet7MKRMZa0fkTmKRMxc1NF5V+c6yJmeWVS5/rqGTfWHsLZ24VtVU8cZu+H69fX1ZU2MFIncUiXw8n4TsySTHR8KcqemKjtfGMwV9OFPV5dMh+umKPpmZ1akwj8idpCJf1eVyVVferW0VDWMh7JIunEjmZM6G6KU5jUxWNXK2v36OyJ2kIt9Q4dP7KofVOhli7wlbRl9jzrDeu3VflVslHdu9jsidRFfyki6ebJrT5sjwZ/WVXCgtqzCcq58jcif/YU/O9E/ro/KsBo6G496w0lv25DkN9BK5s0jkw5lhnSmGp4u7ydNF5e6SrgzWVmxOA8XwNDFa2J3bp1Oj4TjcECJ362hOPceSL7b9ENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhswCtmBq/FSn7ViGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhswOsMBkQ2YLswILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgGRDYgsgGRDYhsQGQDIhsQ2YDIBkQ2ILIBkQ2IbEBkAyIbENmAyAZENiCyAZENiGxAZAMiGxDZgMgHLqt/ANQNqqxMsJCAAAAAAElFTkSuQmCC");
//     return binaryData
// }


// export function adicionarhtm(){
//    const decodificado = decodifica()
//     const imagi= document.getElementById("imageDisplay")
//     imagi.src = `data:image/jpeg;base64,${decodificado}`
//     imagi.id = "vom"
// }

// adicionarhtm()