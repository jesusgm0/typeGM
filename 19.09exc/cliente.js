export function Cliente(nome, saldo, agencia, banco) {
        this.nome = nome;
        this.saldo = saldo;
        this.agencia = agencia;
        this.banco = banco;
    }
    Cliente.prototype.verSaldo = function () {
        console.log("O saldo da sua conta \u00E9 R$ ".concat(this.saldo));
    };
    Cliente.prototype.sacar = function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque de R$ ".concat(valor, " realizado com sucesso"));
        }
        else {
            console.log("Saque de R$ ".concat(valor, " impossivel de ser realizado"));
        }
    };
    Cliente.prototype.deposito = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Deposito de R$ ".concat(valor, " realizado com sucesso"));
        }
        else {
            console.log("Deposito de R$ ".concat(valor, " impossivel de ser realizado"));
        }
    };
    