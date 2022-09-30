let estoque: string[] =[]

console.log ("Os itens disponíveis no estoque são: ")
estoque.push ('Chuteira', 'Caneleira', 'Tênis', 'Bola', 'Apito', 'Camisa', 'Meião');

for (let i of estoque){
    console.log (i)
}

estoque.splice(1, 1);
    console.log("Vish acabou a chuteira que vc queria ;<")

estoque.splice (5, 5);
    console.log("Acabou o meião também, q parada D:")


console.log ("Os itens que estão disponíveis no estoque após o fim do dia: ")
console.log (estoque);
