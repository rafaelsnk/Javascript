function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

let resultado = 5 * pi()
console.log(resultado)

function imc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc
}

console.log(imc(101, 1.90))

// addEventListener('click', function () { console.log('oi') })

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if (idade >= 60) {
    return 'É idoso';
  } else {
    return 'Não é idoso';
  }
}

console.log(terceiraIdade('teste'));
console.log(terceiraIdade(90));
console.log(terceiraIdade(55));


function faltaVisitar(paisesVisitados) {
  const totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} paises`
}
// console.log(totalPaises); // erro, totalPaises não definido
console.log(faltaVisitar(1))
// console.log(totalPaises) dentro do escopo da função

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados())
// console.log(outrosDados())

