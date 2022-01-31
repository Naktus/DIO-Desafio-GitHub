class ContaBancaria {
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo (valor){
        this._saldo = valor;
    }

    sacar(valor){
        if (valor > this._saldo){
            return 'Operação negada, saldo insuficiente'
        }
        this._saldo = this.saldo - valor

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        
        return this.saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor (agencia, numero, cartãoCredito) {
        super(agencia, numero);
        this.tipo = 'Conta Corrente';
        this._cartãoCredito = cartãoCredito  
    }
    
    get cartãoCredito() {
        return this._cartãoCredito;
    } 

    set cartãoCredito(valor) {
        this._cartãoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor (agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Conta Poupança';
    }
}

class ContaUniverstaria extends ContaBancaria {
    constructor (agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Conta Universitária';
    }

    sacar(valor){
        if (valor > 500){
            return 'Operação negada, valor acima do permitido'
        }
        this._saldo = this.saldo - valor

       // return this._saldo;
    }
}