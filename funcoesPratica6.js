let restaurantes = [];
let valores = [];
let gorjetas = [];

const gorjeta = (valor) => {
    if (valor < 50) {
        return valor * 0.2;
    }
    else if (valor >= 50 && valor < 200) {
        return valor * 0.15;
    }
    else {
        return valor * 0.1;
    }   
}

for (let i = 0; i < 3; i++) {
    restaurantes[i] = prompt(`Informe o nome do ${i + 1}º restaurante:`);
    valores[i] = parseFloat(prompt(`Informe o valor total do ${i + 1}º restaurante:`)).toFixed(2);
    gorjetas[i] = gorjeta(parseFloat(valores[i])).toFixed(2);
}

const detalhes = (valores,restaurantes,gorjetas) => {
    for (let i = 0; i < 3; i++) {
        console.log(`Restaurante ${restaurantes[i]} - [Valor: R$ ${valores[i]} | Gorjeta: R$ ${gorjetas[i]} | 
        Total: R$ ${parseFloat(gorjetas[i]) + parseFloat(valores[i])}`); 
    }   
}

detalhes(valores,restaurantes,gorjetas);
