export class ProdutoEletronico {
    material: string;
    voltagem: string;
    preco: number;
    marca: string;

    constructor (
        material: string,
        voltagem: string,
        preco: number,
        marca: string,
){
    this.material = material
    this.voltagem = voltagem
    this.preco = preco
    this.marca = marca
}
verAparelho(){
    console.log (`O chassi desse modelo é de : ${this.material}
    A voltagem do dispositivo é: ${this.voltagem}
    O valor do produto é: ${this.preco}
    a marca do produto: ${this.marca}`)
    
}

}