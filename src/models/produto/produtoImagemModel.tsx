export class ProdutoImagemModel {
    id?: string;
    url: string;
    descricao: string;
    constructor(
        url: string, descricao: string, id?: string
    ) {
        this.id = id;
        this.url = url;
        this.descricao = descricao;
    }
}