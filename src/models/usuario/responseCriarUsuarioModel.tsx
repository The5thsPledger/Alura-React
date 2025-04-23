import ResponseModel from "../responseModel";
import { UsuarioModel } from "./usuarioModel";

export default class ResponseCriarUsuarioModel extends ResponseModel {
    usuario?: UsuarioModel;
    erro?: string;
    constructor(usuario?: UsuarioModel, erro?: string) {
        super();
        this.usuario = usuario;
        this.erro = erro;
    }
}