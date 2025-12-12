import { Produto } from "./Produto";

export class Livro extends Produto {

    constructor(
        id: number,
        titulo: string,
        preco: number,
        quantidade: number
    ) {
        super(id, titulo, preco, quantidade);
    }

    public visualizar(): void {
        console.log("\n===========================================");
        console.log("              DADOS DO LIVRO");
        console.log("===========================================");
        console.log(`ID: ${this.id}`);
        console.log(`Título: ${this.titulo}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log("===========================================");
    }
}
