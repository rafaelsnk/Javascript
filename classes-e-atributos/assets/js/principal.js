const menu = document.querySelector('.menu');
menu.classList.add('ativo');
menu.classList.add('azul');
menu.classList.remove('azul');

if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul')
} else {
  menu.classList.add('verde')
}

console.log(menu);

const animais = document.querySelector('.animais');
console.log(animais.attributes[0])
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');
const srcImg = img.getAttribute('src')
img.setAttribute('alt', 'é um raposa')

const possuiAlt = img.hasAttribute('alt')
console.log(possuiAlt)
console.log(srcImg)