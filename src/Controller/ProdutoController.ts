import { Produto } from "../Models/Produto";
import { ProdutoRepository } from "../Repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Produto[] = [];
    private id: number = 0; // contador automático

    // criar ID automaticamente
    private gerarId(): number {
        return ++this.id;
    }

    // CADASTRAR
    public cadastrar(produto: Produto): void {
        produto.id = this.gerarId();
        this.listaProdutos.push(produto);
        console.log(" Produto cadastrado com sucesso!");
    }

    // LISTAR TODOS
    public listarTodos(): void {
        if (this.listaProdutos.length === 0) {
            console.log("Nenhum produto cadastrado!");
            return;
        }

        this.listaProdutos.forEach((produto) => produto.visualizar());
    }

    // CONSULTAR
    public consultarPorId(id: number): void {
        const produto = this.buscarNoArray(id);

        if (produto) produto.visualizar();
        else console.log(" Produto não encontrado!");
    }

    // ATUALIZAR
    public atualizar(produto: Produto): void {
        const buscar = this.buscarNoArray(produto.id);

        if (buscar) {
            let index = this.listaProdutos.indexOf(buscar);
            this.listaProdutos[index] = produto;
            console.log(" Produto atualizado com sucesso!");
        } else {
            console.log(" Produto não encontrado!");
        }
    }

    // DELETAR
    public deletar(id: number): void {
        const produto = this.buscarNoArray(id);

        if (produto) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(produto), 1);
            console.log(" Produto deletado com sucesso!");
        } else {
            console.log(" Produto não encontrado!");
        }
    }

    // MÉTODOS DE ESTOQUE
    public adicionarEstoque(id: number, quantidade: number): void {
        const produto = this.buscarNoArray(id);

        if (produto) {
            produto.quantidade += quantidade;
            console.log(" Estoque adicionado!");
        } else {
            console.log(" Produto não encontrado!");
        }
    }

    public removerEstoque(id: number, quantidade: number): void {
        const produto = this.buscarNoArray(id);

        if (produto) {
            if (produto.quantidade >= quantidade) {
                produto.quantidade -= quantidade;
                console.log(" Estoque removido!");
            } else {
                console.log(" Quantidade insuficiente no estoque!");
            }
        } else {
            console.log(" Produto não encontrado!");
        }
    }

    // MÉTODO PRIVADO - BUSCAR PRODUTO
    private buscarNoArray(id: number): Produto | null {
        return this.listaProdutos.find(produto => produto.id === id) || null;
    }
}
