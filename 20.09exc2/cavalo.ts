import { Animal } from "./20.09exc2/animal";

export class Cavalo extends Animal{

    constructor(
    nome: string,
    idade: number
){
    super (nome, idade)
    this.nome = nome
    this.idade = idade
}
EmitirSom(): void {
    console.log (`Hiin in in`);
}
Correr(): void {
    console.log (`Hora de voar, Holandes!`);
}
}