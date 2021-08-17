import UsuarioService from '../service/serviceUsuario.js';
import UsuarioClasse from '../class/Usuarios.js';

class UsuarioControler {

    constructor(){
        this.usuarioService = new UsuarioService()
    };

    async addUsuario(req, res){
        
             let usuarioLT =  await new UsuarioClasse(req.body.nome, req.body.email, req.body.senha, req.body.dataDeCriacao)
            this.usuarioService.addUsuario(usuarioLT)
            res.json(usuarioLT)
        };

    async excluirUsuario(req, res){
            await this.usuarioService.excluirUsuario(req.body.email)
             res.send('excluido com sucesso ')
    };

    async alterarUsuario(req , res){
        await this.usuarioService.alterarUsuario(req.body)
        res.send('alterado com sucesso')
    };

    
    buscarUsuario(email){

    };

    async buscarTodosUsuarios(req, res){
            const usuariosRetornados = await this.usuarioService.buscarTodosUsuarios()
            console.log(usuariosRetornados)
            res.json( usuariosRetornados)
    };
}

export default  UsuarioControler

