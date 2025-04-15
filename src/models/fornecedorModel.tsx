export class FornecedorModel {
    id?: string;
    nome: string;
    cnpj: number;
    endereco: string;
    telefone: number;
    email: string;
    constructor(
        nome: string, endereco: string, cnpj: number, telefone: number, email: string, id?: string
    ) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.cnpj = cnpj;
        this.telefone = telefone;
        this.email = email;
    }
}