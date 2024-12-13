import { Conta } from "../model/Conta";
import { ContaRespository } from "../repository/ContaRepository";

export class ContaController implements ContaRespository {

    // Colecao Array que vai armazenar os Objetos Conta
    private listaContas = new Array<Conta>()

    // Controlar os Numeros das Contas
    public numero: number = 0

    public procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero)

        if(buscaConta !== null) buscaConta.visualizar()
        else console.log("Conta não Encontrada!")

    }

    public listarTodas(): void {
        for(let conta of this.listaContas) {
            conta.visualizar()
        }
    }

    public cadastrar(conta: Conta): void {
        this.listaContas.push(conta)
        console.log("A Conta foi cadastrada com sucesso!")
    }

    public atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }

    public deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }

    public sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    public depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    //Métodos Auxiliares
    public gerarNumero(): number {
        return ++this.numero
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero){
                return conta
            }
        }

        return null
    }
}