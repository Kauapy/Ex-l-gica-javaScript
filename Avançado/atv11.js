function buscaBinaria(arr, valor) {
  let esquerda = 0;
  let direita = arr.length - 1;

  while (esquerda <= direita) {
  
    const meio = Math.floor((esquerda + direita) / 2);
    const valorMeio = arr[meio];

  
    if (valorMeio === valor) {
      return meio;
    }
    
    else if (valor > valorMeio) {
      esquerda = meio + 1;
    }

    else {
      direita = meio - 1;
    }
  }

  
  return -1;
}


const meuArrayOrdenado = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const valorBuscado1 = 23;
const valorBuscado2 = 45;

document.write(`O índice de ${valorBuscado2} é: ${buscaBinaria(meuArrayOrdenado, valorBuscado2)}<br>`);

document.write(`O índice de ${valorBuscado1} é: ${buscaBinaria(meuArrayOrdenado, valorBuscado1)}<br>`);