"use client"
import FormListarUsuario from "@/components/FormListarUsuario";
import { UsuarioModel } from "@/models/usuario/usuarioModel";
import httpRequest from "@/utils/httpRequest";
import { useEffect, useState } from "react";

export default function UsuariosPage() {
    const [usuarios, setUsuarios] = useState<UsuarioModel[]>([]);
    useEffect(() => {
        httpRequest<UsuarioModel[]>("usuarios", "GET").then((response) => {
            setUsuarios(response);
        }).catch((error) => {
            console.error("Erro ao listar usuários:", error);
        });
    }, []);

    return (
        <div className="justify-center items-center flex-col">
            <h2 className="text-lg font-bold mb-4">Lista de Usuários</h2>
            <div className="flex-col justify-center items-center">

            {Array.isArray(usuarios) && usuarios.length > 0 ? (usuarios.map((usuario: UsuarioModel) => (
                <FormListarUsuario key={usuario.id} user={usuario}/>
            ))) : (
                <div className="text-center">
                    <h2 className="text-lg font-bold mb-4">Nenhum usuário encontrado</h2>
                    <p className="text-gray-700">Tente novamente mais tarde.</p>
                </div>
            )}
            </div>
        </div>
    )
}