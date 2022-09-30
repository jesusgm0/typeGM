import { Animal } from "./20.09exc2/animal";

export class Preguica extends Animal{

    constructor(
    nome: string,
    idade: number
){
    super (nome, idade)
    this.nome = nome
    this.idade = idade
}
EmitirSom(): void {
    console.log (`cronc cronc`);
}
escalarArvore(): void {
    console.log (`Subindo a ladeira do Pelô...`);
}
}