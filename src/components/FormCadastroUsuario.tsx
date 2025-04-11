"use client";
import { PermissaoModel } from "@/models/permissaoModel";
import CriarUsuarioModel from "@/models/usuario/criarUsuarioModel";
import React from "react";

export default function FormCadastroUsuario() {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const nome  = (document.getElementById("nome")  as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const senha = (document.getElementById("senha") as HTMLInputElement).value;
        const permissoes = new Array<PermissaoModel>();
        permissoes.push(new PermissaoModel("admin"));
        console.log(`Nome: ${nome}, Email: ${email}, Senha: ${senha}`);

        const httpRequest = new XMLHttpRequest();
        httpRequest.open("POST", "http://127.0.0.1:3000/api/usuarios", true);
        httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        httpRequest.setRequestHeader("Accept", "application/json");
        httpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");

        httpRequest.send(JSON.stringify(new CriarUsuarioModel(nome, email, senha, permissoes)));
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4 && httpRequest.status === 201) {
                alert("Usuário cadastrado com sucesso!");
            } else if (httpRequest.readyState === 4) {
                alert(
                    "Erro ao cadastrar usuário: " 
                    + httpRequest.statusText + " - " + JSON.parse(httpRequest.responseText).mensagem
                );
            }
        }
    };
    
    return (
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <h2 className="text-lg font-bold mb-4">Cadastro de Usuário</h2>
            <div className="mb-4"> {/* Nome */}
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
                    Nome
                </label>
                <input
                    required
                    type="text"
                    id="nome"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Digite seu nome"
                    pattern="[A-Za-zÀ-ÖØ-öø-ÿ ]{2,100}"
                    title="O nome deve conter apenas letras e espaços, com um mínimo de 2 e um máximo de 100 caracteres."
                    autoComplete="name"
                />
            </div>
            <div className="mb-4"> {/* E-mail */}
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    E-mail
                </label>
                <input
                    required
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Digite seu e-mail"
                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                    title="Por favor, insira um endereço de e-mail válido."
                />
            </div>
            <div className="mb-4"> {/* Senha */}
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="senha">
                    Senha
                </label>
                <input
                    required
                    type="password"
                    id="senha"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Digite sua senha"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,255}"
                    title="A senha deve ter de 6 a 255 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número."
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Cadastrar
            </button>
        </form>
    );
}