const num = parseInt(prompt("Informe um número:"));
let palavras = [];

for (let i = 0; i < num; i++) {
    palavras[i] = prompt("Digite palavras N vezes:");
}
for (let i = palavras.length-1; i >= 0; i--) {
    const palavra = palavras[i];
    console.log(`Palavra ${i + 1}: ${palavra}`);
}