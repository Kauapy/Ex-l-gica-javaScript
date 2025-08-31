function recebaNumero(numero){
    const num = parseFloat(prompt("Digite um número:"));
    if (num > 0) {
        document.write("O número " + num + " é positivo.");
    } else if (num < 0) {
        document.write("O número " + num + " é negativo.");
    } else {
        document.write("O número é zero.");
    }
}

recebaNumero();