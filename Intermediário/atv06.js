function obterStringMaiusculas(arr) {
    return arr.filter(palavra => {
        return palavra.length > 0 &&
               palavra[0] === palavra[0].toUpperCase() &&
               palavra[0] !== palavra[0].toLowerCase();
    });
}

const meuArray = ["JavaScript", "PHP", "python", "C#", "java", "C++", "ruby", "Go", "Swift", "kotlin", "R", "TypeScript"];
const resultado = obterStringMaiusculas(meuArray);
document.write(`Palavras que começam com letra maiúscula: ${resultado.join(", ")}`);