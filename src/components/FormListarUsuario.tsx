import { UsuarioModel } from "@/models/usuario/usuarioModel";
import React from "react";

export default function FormListarUsuario({ user }: { user: UsuarioModel }) {
    return (
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
                    Nome
                </label>
                <input
                    readOnly
                    type="text"
                    id="nome"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={user.nome}
                />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    E-mail
                </label>
                <input
                    readOnly
                    type="text"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={user.email}
                />
            </div>
        </form>
    );
}