function calcularAreaCirculo(raio){
    return Math.PI * Math.pow(raio, 2);
}

const raio = 5;
const area = calcularAreaCirculo(raio);
document.write(`A área do círculo com raio ${raio} é ${area.toFixed(2)}`);