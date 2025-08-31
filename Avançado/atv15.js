function verificarBalanceamento(str) {
  const pilha = [];
  const mapaAberturaFechamento = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const fechamentos = Object.values(mapaAberturaFechamento);

  for (let i = 0; i < str.length; i++) {
    const caractere = str[i];

    if (mapaAberturaFechamento[caractere]) {
      pilha.push(caractere);
    } else if (fechamentos.includes(caractere)) {
      if (pilha.length === 0) {
        return false;
      }

      const aberturaCorrespondente = pilha.pop();
      if (mapaAberturaFechamento[aberturaCorrespondente] !== caractere) {
        return false;
      }
    }
  }

  return pilha.length === 0;
}


document.write("() → " + verificarBalanceamento("()") + "<br>");
document.write("()[]{} → " + verificarBalanceamento("()[]{}") + "<br>");
document.write("([{}]) → " + verificarBalanceamento("([{}])") + "<br>");
document.write("(] → " + verificarBalanceamento("(]") + "<br>");
document.write("([)] → " + verificarBalanceamento("([)]") + "<br>");
document.write("{[}] → " + verificarBalanceamento("{[}]") + "<br>");
document.write("'' → " + verificarBalanceamento("") + "<br>");
document.write("abc → " + verificarBalanceamento("abc") + "<br>");
document.write("((())) → " + verificarBalanceamento("((()))") + "<br>");