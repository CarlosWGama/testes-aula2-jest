
//criação do objeto para o modelo
export const UsuarioService = {
    //===    
    login: (email, senha) => {
        //Não passou no login
        if (email != 'teste@teste.com' || senha != '123456') 
            throw new Error('Usuário ou senha incorreta');
            
        return {id: 1, nome: 'Teste', email: 'teste@teste.com'}
    }
}
