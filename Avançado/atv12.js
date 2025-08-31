function agruparPorCidade(pessoas) {
  return pessoas.reduce((cidadesAgrupadas, pessoa) => {
    const cidade = pessoa.cidade;
    
    if (!cidadesAgrupadas[cidade]) {
      cidadesAgrupadas[cidade] = [];
    }
    
    cidadesAgrupadas[cidade].push(pessoa);
    return cidadesAgrupadas;
  }, {}); 
}


const listaDePessoas = [
  { nome: "Ana", idade: 30, cidade: "Salvador" },
  { nome: "Beto", idade: 25, cidade: "Rio de Janeiro" },
  { nome: "Carla", idade: 35, cidade: "Salvador" },
  { nome: "Daniel", idade: 28, cidade: "São Paulo" },
  { nome: "Eliane", idade: 22, cidade: "Rio de Janeiro" },
];

const pessoasPorCidade = agruparPorCidade(listaDePessoas);
console.log(pessoasPorCidade);
