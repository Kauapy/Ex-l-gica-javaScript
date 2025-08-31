function numeroAleatorio(min, max){
    return Math.random() * (max - min) + min;
}

document.write(`Número aleatório entre 1 e 100: ${numeroAleatorio(1, 100).toFixed(0)}`);