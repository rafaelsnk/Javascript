const imgs = document.querySelectorAll('img');
console.log(imgs);

imgs.forEach(function (item, index, array) {
  console.log(item, index, array)
})

const all = document.querySelectorAll('p');
console.log(all)

all.forEach((item, valor) => {
  console.log(item, valor)
})