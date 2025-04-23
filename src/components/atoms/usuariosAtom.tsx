import { UsuarioModel } from "@/models/usuario/usuarioModel";
import httpRequest from "@/utils/httpRequest";
import { atom } from "jotai";

const usuarios: UsuarioModel[] = [];
httpRequest<null, UsuarioModel[]>("usuarios", "GET")
.then((response) => {
    response.forEach((usuario) => {
        usuarios.push(usuario);
    });
})
.catch((error) => { console.error("Erro ao listar usuários:", error); })

export const usuariosAtom = atom(usuarios);