function substituirPalavra(textoOriginal, palavraAntiga, palavraNova){
    const regex = new RegExp(palavraAntiga, 'g')

    return textoOriginal.replace(regex, palavraNova)
}

const texto = "O rato roeu a roupa do rei de Roma."
const novoTexto = substituirPalavra(texto, "rato", "gato")
document.write(novoTexto)