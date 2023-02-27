// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');
console.log(menu);

menu.forEach((item) => {
  item.classList.add('ativo')
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menu.forEach((item) => {
  item.classList.remove('ativo')
})
menu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');
console.log(imgs)

imgs.forEach((img) => {
  console.log(img.hasAttribute('alt'))
})

// Modifique o href do link externo no menu

const linksExterno = document.querySelector('a[href^="http"]');
console.log(linksExterno)

linksExterno.setAttribute('href', 'https://aol.com')
console.log(linksExterno)


