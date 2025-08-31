function encontrarSegundoMaior(array){
    const arrayOrdenado = array.sort((a, b) => b - a)
    return arrayOrdenado[1]
}

const numeros = [10, 5, 8, 20, 15]
const segundoMaior = encontrarSegundoMaior(numeros)
document.write(`O segundo maior número do array ${numeros} é: ${segundoMaior}`)