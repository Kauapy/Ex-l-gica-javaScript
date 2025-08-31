function calcularMediaNumero(arr){
    const numeroApenas = arr.filter(item => typeof item === 'number' && !isNaN(item))

    if(numeroApenas.length === 0) return 0;
    const soma = numeroApenas.reduce((acc, valorAtual) => + valorAtual, 0)
    const media = soma / numeroApenas.length;
    return media
}

const meuArray = [1 , 5 , 'olá' , 10 , null , 2, undefined, 8]
const mediaFinal = calcularMediaNumero(meuArray)
document.write(`A média dos números do array ${meuArray} é: ${mediaFinal}`)