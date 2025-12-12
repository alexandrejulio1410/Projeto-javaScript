import readlinesync = require("readline-sync");

export function exibirMenu():void {
       let opcao: number;

    do{
        console.log("            SISTEMA DE CONTROLE DE ESTOQUE           ");                         
        console.log("*****************************************************");
        console.log("            1 - Cadastrar Produto                    ");            
        console.log("            2 - Listar Todos os Produtos             ");
        console.log("            3 - Transferir valores entre Contas      ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            0-  Sair                                 ");
        console.log("*****************************************************");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

    switch (opcao) {
            case 1:
                console.log('\nCadastrar Produto\n');
                // Aqui vai a lógica depois
                break;
            case 2:
                console.log('\nListar Todos os Produtos\n');
                break;
            case 3:
                console.log('\nBuscar Produto por ID\n');
                break;
            case 4:
                console.log('\nAtualizar Produto\n');
                break;
            case 5:
                console.log('\nDeletar Produto\n');
                break;
            case 0:
                console.log('\nSaindo do sistema...');
                break;
            default:
                console.log('\nOpcao invalida!');
        }
    } while (opcao !== 0);
}

exibirMenu();