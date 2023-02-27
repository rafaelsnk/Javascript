// window.alert('hello');

const href = window.location.hostname;
console.log(href);

const h1Selecionado = document.querySelector('h1');

h1Selecionado.addEventListener('click', function () {
  console.log('Clicou em', h1Selecionado)
})