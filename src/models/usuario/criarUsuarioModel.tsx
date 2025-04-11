import { PermissaoModel } from "../permissaoModel";
import { UsuarioModel } from "./usuarioModel";

export default class CriarUsuarioModel extends UsuarioModel {
    senha: string;
    constructor(nome: string, email: string, senha: string, permissoes = new Array<PermissaoModel>(), id?: string) {
        super(nome, email, permissoes, id);
        this.senha = senha;
    }
}