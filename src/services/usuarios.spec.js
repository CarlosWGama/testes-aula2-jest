import { UsuarioService } from './usuarios';

describe('testando /src/services/usuario.js',() => {

    //teste 1
    test('Teste 1 - Testando acesso válido', () => {
        const usuario = UsuarioService.login('teste@teste.com', '123456');
        expect(usuario).not.toBeNull();
        expect(usuario.id).toEqual(1);
    })

    //Teste 2
    test('Teste 2 - Testando acesso inválido', () => {
        expect(() => UsuarioService.login('teste2@teste.com', '123456')).toThrow();
    });
})

