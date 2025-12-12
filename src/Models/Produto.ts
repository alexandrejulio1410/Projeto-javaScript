export abstract class Produto { 
    private _id: number;
    private _titulo: string;
    private _preco: number;
    private _quantidade: number;

    constructor(id: number, titulo: string, preco: number, quantidade: number) {
        this._id = id;
        this._titulo = titulo;
        this._preco = preco;
        this._quantidade = quantidade;
    }

    // Getters
    public get id(): number {
        return this._id;
    }

    public get titulo(): string {
        return this._titulo;
    }

    public get preco(): number {
        return this._preco;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    // Setters
    public set id(id: number) {
        this._id = id;
    }

    public set titulo(titulo: string) {
        this._titulo = titulo;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    public set quantidade(quantidade: number) {
        this._quantidade = quantidade;
    }
    
public adicionarEstoque(valor: number): void {
        this._quantidade = this._quantidade + valor;
        console.log(`\n${valor} unidade(s) adicionada(s) ao estoque.`);
    }

    public removerEstoque(valor: number): boolean {
        if (this._quantidade < valor) {
            console.log("\n Estoque insuficiente!");
            return false;
        }

        this._quantidade = this._quantidade - valor;
        return true;
    }

    public visualizar(): void {
        console.log("\n\n*****************************************************");
        console.log("Dados do Produto:");
        console.log("*****************************************************");
        console.log("ID: " + this._id);
        console.log("Título: " + this._titulo);
        console.log("Preço: R$ " + this._preco.toFixed(2));
        console.log("Quantidade em Estoque: " + this._quantidade);
    }
}