function obterChavesComValoresString(objeto) {
  const chavesString = []; 
  for (const chave in objeto) { 
    if (Object.hasOwnProperty.call(objeto, chave)) { 
      if (typeof objeto[chave] === 'string') { 
        chavesString.push(chave); 
      }
    }
  }
  return chavesString; 
}

const meuObjeto = {
  nome: "Kauã",
  idade: 17,
  cidade: "Salvador",
  email: "kaua@example.com",
  ativo: true
};

const chavesString = obterChavesComValoresString(meuObjeto);
document.write("Chaves com valores do tipo string: " + chavesString.join(", "));