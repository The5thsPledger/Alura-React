export class PermissaoModel {
    id?: string;
    nome: string;
    constructor(
        nome: string, id?: string
    ) {
        this.id = id;
        this.nome = nome;
    }
}