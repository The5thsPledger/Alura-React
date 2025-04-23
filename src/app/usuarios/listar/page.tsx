"use client"
import { usuariosAtom } from "@/components/atoms/usuariosAtom";
import FormListarUsuario from "@/components/FormListarUsuario";
import { useAtom } from "jotai";

export default function UsuariosPage() {
    const [usuarios] = useAtom(usuariosAtom); 
    return (
        <div className="justify-center items-center flex-col">
            <h2 className="text-lg font-bold mb-4">Lista de Usuários</h2>
            <div className="flex-col justify-center items-center">

            {(() => {
                if (usuarios.length === 0) {
                    return <p className="text-gray-500">Nenhum usuário encontrado.</p>;
                }
                return usuarios.map((usuario) => (
                    <FormListarUsuario key={usuario.id} user={usuario}/>
                ));
            })()}
            </div>
        </div>
    )
}