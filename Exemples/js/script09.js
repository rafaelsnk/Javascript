// Crie uma função para verificar se um valor é Truthy

function verificarValor(nome) {
  return !!nome
}

console.log(verificarValor()); // false
console.log(verificarValor(' ')); // true

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function lado(lado) {
  return 4 * lado
}

console.log(lado(9))


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}

console.log(nomeCompleto('Karine ', 'Souza'));

// Crie uma função que verifica se um número é par

function numeroPar(numero) {
  if (numero % 2 == 0) {
    console.log('É par')
  } else {
    console.log('É ímpar')
  }
}

numeroPar(2);
numeroPar(3);


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
  return typeof dado
}

console.log(tipoDeDado(2));
console.log(tipoDeDado('Aol'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function () {
  console.log('Karina Alvez')
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
