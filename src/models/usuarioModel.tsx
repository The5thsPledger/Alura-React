import { PermissaoModel } from './permissaoModel';

export class UsuarioModel {
    id: string;
    nome: string;
    email: string;
    permissoes = new Array<PermissaoModel>();
    constructor(
        id: string, nome: string, email: string, permissoes = new Array<PermissaoModel>()
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.permissoes = permissoes;
    }
}