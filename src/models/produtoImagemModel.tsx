export class ProdutoImagemModel {
    id: string;
    url: string;
    descricao: string;
    constructor(
        id: string, nome: string, descricao: string
    ) {
        this.id = id;
        this.url = nome;
        this.descricao = descricao;
    }
}