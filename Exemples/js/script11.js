// Crie um objeto com os seus dados pessoais

let dadosPessoais = {
  nome: 'Marcia',
  sobrenome: 'Efect',
  idade: 24,
  possuiFaculdade: true,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 10,
    cep: 09876321
  }
}

console.log(dadosPessoais)

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`
}

console.log(dadosPessoais.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  late(pessoa) {
    if (pessoa === 'homem') {
      return 'Au au'
    } else {
      return ' '
    }
  }
}


console.log(cachorro.late('homem'));
console.log(cachorro.late('mulher'));
