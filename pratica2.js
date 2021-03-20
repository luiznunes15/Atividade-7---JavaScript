const nome = prompt("Digite seu nome:");
const altura = parseFloat(prompt("Digite sua altura:"));
const peso = parseFloat(prompt("Digite seu peso:"));

const imc = peso / (altura * altura);

if (imc < 17) {
    alert(`${nome}! Você está muito abaixo do peso! Dica: Comece a comer imediatamente!`);
} 
else if (imc >= 17 && imc < 18.50){
    alert(`${nome}! Você está abaixo do peso! Dica: Tente comer um pouco mais!`);
}
else if (imc >= 18.50 && imc < 25){
    alert(`${nome}! Você está no peso normal! Dica: Continue assim!`);
}
else if (imc >= 25 && imc < 30){
    alert(`${nome}! Você está acima do peso! Dica: Tome cuidadado com a sua alimentação!`);
}
else if (imc >= 30 && imc < 35){
    alert(`${nome}! Você está no nível 1 de obesidade! Dica: Pare de comer tanta besteira!`);
}
else if (imc >= 35 && imc < 40){
    alert(`${nome}! Você está no nível 2 de obesidade(severa)! Dica: Pare de comer tanto Big Mac e batata frita!`);
}
else {
    alert(`${nome}! Você está no nível 3 de obesidade(mórbida) Dica: Mude completamente sua alimentação e faça exercícios!`);
}
