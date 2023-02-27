// Retorne o url da página atual utilizando o objeto window

const urlRetorno = window.location.href;
console.log(urlRetorno)

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const classeAtivo = document.querySelector('.ativo');
// retorno: <h1 class="ativo">O que é o DOM</h1>
console.log(classeAtivo)


// Retorne a linguagem do navegador
const idioma = window.navigator.language
console.log(idioma);

// Retorne a largura da janela 
const larguraJanela = window.innerWidth;
console.log(larguraJanela)