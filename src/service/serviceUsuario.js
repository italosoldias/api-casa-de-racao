class UsuarioService{

    constructor(){
        this.usuarios = [];

    };

    addUsuario(usuario){
        this.usuarios.push(usuario);
    };

    excluirUsuario(email){
        
        let indice = this.usuarios.findIndex((objeto) => objeto.email == email )
        this.usuarios.splice(indice,1)
    };

    alterarUsuario(email){

    }

    buscarUsuario(email){

    }

    buscarTodosUsuarios(){
        return this.usuarios
    }
}

module.exports = UsuarioService
