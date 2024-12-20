import { Conta } from "../model/Conta";
import { ContaRespository } from "../repository/ContaRepository";

export class ContaController implements ContaRespository {
    private listaContas = new Array<Conta>()
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
        const buscaConta = this.buscarNoArray(conta.numero)

        if(buscaConta !== null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta
            console.log("A Conta foi atualizada com sucesso!")
        }
        else console.log("Conta não Encontrada!")
    }

    public deletar(numero: number): void {
        const buscaConta = this.buscarNoArray(numero)

        if(buscaConta !== null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1)
            console.log("A Conta foi deletada com sucesso!")
        }
        else console.log("Conta não Encontrada!")
    }
    
    public sacar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero)
        if(buscaConta !== null){
            if(buscaConta.sacar(valor) === true) {
                console.log("O Saque foi efetuado com sucesso!")
            }
        }
    }

    public depositar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero)
        if(buscaConta !== null){
            buscaConta.depositar(valor) 
            console.log("O Depósito foi efetuado com sucesso!")
        } else {
            console.log("Conta não Encontrada!")
        }
    }

    public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const contaOrigem = this.buscarNoArray(numeroOrigem)
        const contaDestino = this.buscarNoArray(numeroDestino)

        if(contaOrigem !== null && contaDestino !== null){
            if(contaOrigem.sacar(valor) === true) {
                contaDestino.depositar(valor)
                console.log("A transferencia foi efetuado com sucesso!")
            }
        } else {
            console.log("Conta de Origem e/ou Conta de Detino não foi Encontrada!")
        }
    }

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

    public procurarPorTitular(titular: string) {

        let buscarPorTitular = this.listaContas.filter(conta => {
            conta.titular.toUpperCase().includes(titular.toUpperCase())
        })

        buscarPorTitular.forEach(conta => conta.visualizar())
    }
}