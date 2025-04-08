"use client";
import React from "react";

export default function FormCadastroUsuario() {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const nome          = (document.getElementById("nome")          as HTMLInputElement).value;
        const valor         = (document.getElementById("valor")         as HTMLInputElement).value;
        const quantidade    = (document.getElementById("quantidade")    as HTMLInputElement).value;
        const descricao     = (document.getElementById("descricao")     as HTMLInputElement).value;
        const categoria     = (document.getElementById("categoria")     as HTMLInputElement).value;
        console.log(`Nome: ${nome}, Valor: ${valor}`, `Quantidade: ${quantidade}`, `Descricao: ${descricao}`, `Categoria: ${categoria}`);
    };
    
    return (
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <h2 className="text-lg font-bold mb-4">Cadastro de Produtos</h2>
            <div className="mb-4">
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
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="valor">
                    Valor
                </label>
                <input
                    required
                    type="number"
                    min={0.01}
                    step={0.01}
                    max={999999.99}
                    id="valor"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Digite o valor do produto"
                    pattern="^\d+(\.\d{1,2})?$"
                    autoComplete="valor"
                    title="O valor deve ser um número positivo com até duas casas decimais."
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantidade">
                    Quantidade
                </label>
                <input
                    required
                    type="number"
                    min={1}
                    step={1}
                    max={999999}
                    id="quantidade"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Digite a quantidade do produto"
                    pattern="^\d+$"
                    autoComplete="quantidade"
                    title="A quantidade deve ser um número inteiro positivo."
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descricao">
                    Descrição
                </label>
                <input
                    required
                    type="text"
                    id="descricao"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Digite a descrição do produto"
                    autoComplete="descricao"
                    pattern="^[A-Za-zÀ-ÖØ-öø-ÿ0-9.,;:!? ]{10,255}$"
                    title="A descrição deve conter entre 10 e 255 caracteres, incluindo letras, números e alguns caracteres especiais."
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria">
                    Categoria
                </label>
                <input
                    required
                    type="text"
                    id="categoria"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Digite a categoria do produto"
                    pattern="^[A-Za-zÀ-ÖØ-öø-ÿ0-9.,;:!? ]{10,255}$"
                    title="A categoria deve conter entre 10 e 255 caracteres, incluindo letras, números e alguns caracteres especiais."
                    autoComplete="categoria"
                />
            </div>
            <h3 className="text-lg font-bold mb-4">Imagens do Produto</h3>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
                    URL
                </label>
                <input
                    required
                    type="url"
                    id="url"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Digite a URL da Imagem do Produto"
                    autoComplete="url"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descricao-imagem">
                    Descrição da Imagem
                </label>
                <input
                    required
                    type="text"
                    id="descricao-imagem"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Digite a descrição da imagem do produto"
                    autoComplete="descricao-imagem"
                    pattern="^[A-Za-zÀ-ÖØ-öø-ÿ0-9.,;:!? ]{10,255}$"
                    title="A descrição deve conter entre 10 e 255 caracteres, incluindo letras, números e alguns caracteres especiais."
                />
            </div>
            <h3 className="text-lg font-bold mb-4">Características do Produto</h3>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome-caracteristica">
                    Nome da Característica
                </label>
                <input
                    required
                    type="text"
                    id="nome-caracteristica"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Digite o nome da característica"
                    pattern="[A-Za-zÀ-ÖØ-öø-ÿ ]{2,100}"
                    title="O nome deve conter apenas letras e espaços, com um mínimo de 2 e um máximo de 100 caracteres."
                    autoComplete="nome-caracteristica"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descricao-caracteristica">
                    Descrição da Caracteristica
                </label>
                <input
                    required
                    type="text"
                    id="descricao-caracteristica"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Digite a descrição da característica do produto"
                    autoComplete="descricao-caracteristica"
                    pattern="^[A-Za-zÀ-ÖØ-öø-ÿ0-9.,;:!? ]{10,255}$"
                    title="A descrição deve conter entre 10 e 255 caracteres, incluindo letras, números e alguns caracteres especiais."
                />
            </div>
            <h3 className="text-lg font-bold mb-4">Fornecedor do Produto</h3>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome-fornecedor">
                    Nome do Fornecedor
                </label>
                <input
                    required
                    type="text"
                    id="nome-fornecedor"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Digite o nome do fornecedor"
                    pattern="[A-Za-zÀ-ÖØ-öø-ÿ ]{2,100}"
                    title="O nome deve conter apenas letras e espaços, com um mínimo de 2 e um máximo de 100 caracteres."
                    autoComplete="nome-fornecedor"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cnpj">
                    CNPJ
                </label>
                <input
                    required
                    type="number"
                    min={1}
                    step={1}
                    max={999999}
                    id="cnpj"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Digite o CNPJ do fornecedor do produto"
                    pattern="^\d+$"
                    autoComplete="cnpj"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endereco-fornecedor">
                    Endereço do Fornecedor
                </label>
                <input
                    required
                    type="text"
                    id="endereco-fornecedor"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Digite o endereço do fornecedor do produto"
                    autoComplete="endereco-fornecedor"
                    pattern="^[A-Za-zÀ-ÖØ-öø-ÿ0-9.,;:!? ]{10,255}$"
                    title="o endereço deve conter entre 10 e 255 caracteres, incluindo letras, números e alguns caracteres especiais."
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefone">
                    Telefone
                </label>
                <input
                    required
                    type="number"
                    min={1111111111}
                    step={1}
                    max={99999999999}
                    id="telefone"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Digite o telefone do fornecedor do produto"
                    pattern="^\d+$"
                    autoComplete="telefone"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    E-mail do Fornecedor
                </label>
                <input
                    required
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Digite seu e-mail"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Por favor, insira um endereço de e-mail válido."
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