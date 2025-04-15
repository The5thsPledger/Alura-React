import { FornecedorModel } from "../fornecedorModel";
import { UsuarioModel } from "../usuario/usuarioModel";
import { ProdutoCaracteristicaModel } from "./produtoCaracteristicaModel";
import { ProdutoImagemModel } from "./produtoImagemModel";

export class ProdutoModel {
    id?: string;
    nome: string;
    valor: number;
    quantidade: number;
    descricao: string;
    categoria: string;
    usuario: UsuarioModel;
    imagens: ProdutoImagemModel[];
    caracteristicas: ProdutoCaracteristicaModel[];
    fornecedor: FornecedorModel;
    constructor(
        nome: string, valor: number, quantidade: number, descricao: string, categoria: string, usuario: UsuarioModel,
        imagens: ProdutoImagemModel[], caracteristicas: ProdutoCaracteristicaModel[], 
        fornecedor: FornecedorModel, id?: string
    ) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
        this.descricao = descricao;
        this.categoria = categoria;
        this.usuario = usuario;
        this.imagens = imagens;
        this.caracteristicas = caracteristicas;
        this.fornecedor = fornecedor;
    }
}