import { PermissaoModel } from '../permissaoModel';

export class UsuarioModel {
    id?: string;
    nome: string;
    email: string;
    permissoes = new Array<PermissaoModel>();
    constructor(
        nome: string, email: string, permissoes = new Array<PermissaoModel>(), id?: string
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.permissoes = permissoes;
    }
}