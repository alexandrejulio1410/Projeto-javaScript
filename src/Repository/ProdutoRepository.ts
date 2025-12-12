import { Produto } from "../Models/Produto";

export interface ProdutoRepository {

    consultarPorId(id: number): void;
    listarTodos(): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;

    adicionarEstoque(id: number, quantidade: number): void;
    removerEstoque(id: number, quantidade: number): void;

}
