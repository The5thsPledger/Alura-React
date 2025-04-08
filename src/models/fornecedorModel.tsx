export class FornecedorModel {
    id: string;
    nome: string;
    cnpj: number;
    endereco: string;
    telefone: number;
    email: string;
    constructor(
        id: string, nome: string, descricao: string, cnpj: number, telefone: number, email: string
    ) {
        this.id = id;
        this.nome = nome;
        this.endereco = descricao;
        this.cnpj = cnpj;
        this.telefone = telefone;
        this.email = email;
    }
}