export class Paciente {
    nome: string;
    alta: string;
    entrada: string;

    constructor (
    nome: string,
    alta: string,
    entrada: string
){
    this.nome = nome
    this.alta = alta
    this.entrada = entrada
}
VerInfo(){
    console.log (`O nome do paciente é: ${this.nome}
    A data da alta: ${this.alta}
    A data de internação é: ${this.entrada}`)
}

}