const nome = prompt("Digite o seu nome:");
const idade = parseInt(prompt("Digite a sua idade:"));

function calcularIdade(idade) {
    return 65 - idade;
}

if (idade >= 65) {
    console.log(`${nome} já está aposentado!`); 
} else {
    console.log(`${nome} faltam ${calcularIdade(idade)} anos para você se aposentar!`);
}