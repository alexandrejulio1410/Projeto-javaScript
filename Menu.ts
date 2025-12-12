import readlinesync = require("readline-sync");
import { Produto } from "./src/Models/Produto";
import { Livro } from "./src/Models/Livro";
import { ProdutoRepository } from "./src/Repository/ProdutoRepository";

export function exibirMenu(): void {
    let opcao: number;

    do {
        console.log("\n");
        console.log("╔════════════════════════════════════════════╗");
        console.log("║   SISTEMA DE CONTROLE DE ESTOQUE           ║");
        console.log("║            LIVRARIA LEITURA                ║");
        console.log("╚════════════════════════════════════════════╝");
        console.log("║                                            ║");
        console.log("║  1 - Cadastrar Livro                       ║");
        console.log("║  2 - Listar Todos os Livros                ║");
        console.log("║  3 - Consultar Livro por ID                ║");
        console.log("║  4 - Atualizar Livro                       ║");
        console.log("║  5 - Deletar Livro                         ║");
        console.log("║  0 - Sair                                  ║");
        console.log("║                                            ║");
        console.log("╚════════════════════════════════════════════╝");
        console.log("Entre com a opção desejada: ");

        opcao = readlinesync.questionInt("");

        switch (opcao) {
            case 1:
                console.log("\n Cadastrar Livro\n");

                const id = readlinesync.questionInt("ID do Livro: ");
                const titulo = readlinesync.question("Tiulo: ");
                const preco = readlinesync.questionFloat("Preco ");
                const quantidade = readlinesync.questionInt("Quantidade: ");
                
                const livro = new Livro(id, titulo, preco, quantidade);

        
                console.log("\n Livro cadastrado com sucesso!");
                // Lógica será implementada na Etapa 3
                keyPress();
                break;

            case 2:
                console.log("\n Listar Todos os Livros\n");
            
                keyPress();
                break;

            case 3:
                console.log("\n Consultar Livro por ID\n");
                const idConsulta = readlinesync.questionInt("Digite o ID do Livro: ");
            
                keyPress();
                break;

            case 4:
                console.log("\n Atualizar Livro\n");
                
                const idAtualizar = readlinesync.questionInt("Digite o ID do Livro a ser atualizado: ");
                
                    const novoTitulo = readlinesync.question("Novo Título: ");
                    const novoPreco = readlinesync.questionFloat("Novo Preco ");
                    const novaQuantidade = readlinesync.questionInt("Nova Quantidade: ");
                     
                const livroatualizado = new Livro(idAtualizar, novoTitulo, novoPreco, novaQuantidade);


                    
                
                    keyPress();
                break;

            case 5:
                console.log("\n Deletar Livro\n");
                
                const idDeletar = readlinesync.questionInt("id do livro: ");
                keyPress();
                break;

            case 0:
                console.log("\n Livraria Leitura - Encerrando...");
                console.log("Obrigado por usar nosso sistema!");
                sobre();
                break;

            default:
                console.log("\n Opção Inválida! Tente novamente.");
                keyPress();
        }
    } while (opcao !== 0);
}

function sobre(): void {
    console.log("\n╔════════════════════════════════════════════╗");
    console.log("║  Projeto Desenvolvido por: Alexandre Julio ║");
    console.log("║  Generation Brasil - 2025                  ║");
    console.log("╚════════════════════════════════════════════╝");
}

function keyPress(): void {
    console.log("\n\nPressione ENTER para continuar...");
    readlinesync.prompt();
}

exibirMenu();