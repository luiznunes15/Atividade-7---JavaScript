const nome = prompt("Digite seu nome:");
const altura = parseFloat(prompt("Digite sua altura:"));
const peso = parseFloat(prompt("Digite seu peso:"));

const nomePessoa2 = prompt("Digite seu nome:");
const alturaPessoa2 = parseFloat(prompt("Digite sua altura:"));
const pesoPessoa2 = parseFloat(prompt("Digite seu peso:"));

const imc = parseFloat(peso / (altura * altura)).toFixed(2);
const imcPessoa2 = parseFloat(pesoPessoa2 / (alturaPessoa2 * alturaPessoa2)).toFixed(2);

if (imc > imcPessoa2) {
    console.log(`O IMC de ${nome} (${imc}) é maior que o de ${nomePessoa2} (${imcPessoa2})`);
} else {
    console.log(`O IMC de ${nomePessoa2} (${imcPessoa2}) é maior que o de ${nome} (${imc})`);
}
