const animais = document.getElementById('animais')
// console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection);

const primeiraLi = document.querySelector('li');
// console.log(primeiraLi);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[2]);

const gridSectionNode = document.querySelectorAll('.grid-section');

gridSectionNode.forEach(function (item, index) {
  console.log(item)
})

const arryGrid = Array.from(gridSectionHTML); //transforma em uma array