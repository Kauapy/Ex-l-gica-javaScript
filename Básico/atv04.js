function contarPalavras(texto){
    const palavras = texto.trim().split(/\s+/);
    return texto.trim() === "" ? 0 : palavras.length;
}

const frase = "EU AMO PROGRAMAR EM JAVASCRIPT!";
document.write(`A frase ${frase} tem ${contarPalavras(frase) } palavras.`)