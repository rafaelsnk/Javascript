let pessoa = {
  nome: 'Marina',
  idade: 23,
  profissao: 'Analista de Vendas',
  possuiFaculdade: true
}

console.log(pessoa)

let quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado
  },
  perimetro: function (lado) {
    return this.lados * lado
  }
}

console.log(quadrado.area(2));
console.log(quadrado.perimetro(5));

console.log(Math.PI, Math.random(), Math.E)