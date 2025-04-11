import { FornecedorModel } from "../fornecedorModel";
import { ProdutoCaracteristicaModel } from "./produtoCaracteristicaModel";
import { ProdutoImagemModel } from "./produtoImagemModel";

export class ProdutoModel {
    id: string;
    nome: string;
    valor: number;
    quantidade: number;
    descricao: string;
    categoria: string;
    imagem: ProdutoImagemModel[];
    caracteristicas: ProdutoCaracteristicaModel[];
    fornecedor: FornecedorModel;
    constructor(
        id: string, nome: string, valor: number, quantidade: number, descricao: string, categoria: string, imagem: ProdutoImagemModel[], caracteristicas: ProdutoCaracteristicaModel[], fornecedor: FornecedorModel
    ) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
        this.descricao = descricao;
        this.categoria = categoria;
        this.imagem = imagem;
        this.caracteristicas = caracteristicas;
        this.fornecedor = fornecedor;
    }
}