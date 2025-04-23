"use client";
import { FornecedorModel } from "@/models/fornecedorModel";
import { PermissaoModel } from "@/models/permissaoModel";
import { ProdutoCaracteristicaModel } from "@/models/produto/produtoCaracteristicaModel";
import { ProdutoImagemModel } from "@/models/produto/produtoImagemModel";
import { ProdutoModel } from "@/models/produto/produtoModel";
import { UsuarioModel } from "@/models/usuario/usuarioModel";
import httpRequest from "@/utils/httpRequest";
import React from "react";

export default function FormCadastroProduto() {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const nome                      = (document.getElementById("nome")                      as HTMLInputElement).value;
        const valor                     = (document.getElementById("valor")                     as HTMLInputElement).valueAsNumber;
        const quantidade                = (document.getElementById("quantidade")                as HTMLInputElement).valueAsNumber;
        const descricao                 = (document.getElementById("descricao")                 as HTMLInputElement).value;
        const categoria                 = (document.getElementById("categoria")                 as HTMLInputElement).value;

        const idUsuario                 = (document.getElementById("id-usuario")                as HTMLInputElement).value;
        const nomeUsuario               = (document.getElementById("nome-usuario")              as HTMLInputElement).value;
        const emailUsuario              = (document.getElementById("email-usuario")             as HTMLInputElement).value;
        const url                       = (document.getElementById("url")                       as HTMLInputElement).value;
        const descricaoImagem           = (document.getElementById("descricao-imagem")          as HTMLInputElement).value;
        const nomeCaracteristica        = (document.getElementById("nome-caracteristica")       as HTMLInputElement).value;
        const descricaoCaracteristica   = (document.getElementById("descricao-caracteristica")  as HTMLInputElement).value;
        const nomeFornecedor            = (document.getElementById("nome-fornecedor")           as HTMLInputElement).value;
        const cnpj                      = (document.getElementById("cnpj")                      as HTMLInputElement).valueAsNumber;
        const enderecoFornecedor        = (document.getElementById("endereco-fornecedor")       as HTMLInputElement).value;
        const telefone                  = (document.getElementById("telefone")                  as HTMLInputElement).valueAsNumber;
        const email                     = (document.getElementById("email")                     as HTMLInputElement).value;

        httpRequest<ProdutoModel, ProdutoModel>(
            "produtos", "POST", new ProdutoModel(
                nome, valor, quantidade, descricao, categoria, 
                new UsuarioModel(nomeUsuario, emailUsuario, new Array<PermissaoModel>(), idUsuario),
                new Array<ProdutoImagemModel>(new ProdutoImagemModel(url, descricaoImagem)),
                new Array<ProdutoCaracteristicaModel>(new ProdutoCaracteristicaModel(nomeCaracteristica, descricaoCaracteristica)),
                new FornecedorModel(nomeFornecedor, enderecoFornecedor, cnpj, telefone, email)),
            ).then(() => {
                    alert("Produto cadastrado com sucesso!");
            }).catch((error) => {
                    console.error("Erro ao cadastrar produto:", error);
            }
        );
    };
    
    return (
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <h2 className="text-lg font-bold mb-4">Cadastro de Produtos</h2>
            <div className="mb-4"> {/* Nome */}
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
                    Nome
                </label>
                <input
                    required
                    type="text"
                    id="nome"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Digite o nome do produto"
                    pattern="[A-Za-zÀ-ÖØ-öø-ÿ ]{2,100}"
                    title="O nome deve conter apenas letras e espaços, com um mínimo de 2 e um máximo de 100 caracteres."
                    autoComplete="name"
                />
            </div>
            <div className="mb-4"> {/* Valor */}
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
            <div className="mb-4"> {/* Quantidade */}
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
            <div className="mb-4"> {/* Descrição */}
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
                    minLength={10}
                    maxLength={255}
                    title="A descrição deve conter entre 10 e 255 caracteres."
                />
            </div>
            <div className="mb-4"> {/* Categoria */}
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
            <h3 className="text-lg font-bold mb-4">Usuário</h3>
            <div className="mb-4"> {/* Usuário */}
                <label htmlFor="id-usuario">
                    Usuário
                </label>
                <select
                    required
                    id="id-usuario"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    defaultValue="3d0e821c-0ea3-447c-95a7-1a1e2997bb8d"
                >
                    <option value="3d0e821c-0ea3-447c-95a7-1a1e2997bb8d">John Doe</option>
                </select>
                <input type="hidden" id="nome-usuario" value="John Doe" />
                <input type="hidden" id="email-usuario" value="teste0@teste.com" />
            </div>
            <h3 className="text-lg font-bold mb-4">Imagens do Produto</h3>
            <div className="mb-4"> {/* URL */}
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
                    pattern="https?://.+"
                    title="A URL deve começar com http:// ou https:// e conter pelo menos 3 caracteres."
                    minLength={11}
                    onChange={(event) => {
                        if (!(event.target.value.startsWith("http://") || event.target.value.startsWith("https://"))) {
                            event.target.value = "http://" + event.target.value;
                        }
                    }}
                />
            </div>
            <div className="mb-4"> {/* Descrição da Imagem */}
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
            <div className="mb-4"> {/* Nome da Característica */}
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
            <div className="mb-4"> {/* Descrição da Caracteristica */}
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
            <div className="mb-4"> {/* Nome do Fornecedor */}
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
            <div className="mb-4"> {/* CNPJ */}
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
            <div className="mb-4"> {/* Endereço do Fornecedor */}
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
            <div className="mb-4"> {/* Telefone */}
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
            <div className="mb-4"> {/* E-mail do Fornecedor */}
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