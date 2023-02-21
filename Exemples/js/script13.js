let videoGames = ['PS4', 'PS5', 'PS6', 'Xbox', 'Xbox 360'];
console.log(videoGames);
videoGames.pop() // remove todos os elementos do array
console.log(videoGames)
videoGames.push('3DS');
console.log(videoGames);

for (let i = 0; i < 10; i++) {
  console.log(`índice = ${i}`)
}

let j = 0;
while (j < 10) {
  console.log(`New = ${j}`);
  j++
}

for (let k = 0; k < videoGames.length; k++) {
  console.log(videoGames[k])
}

videoGames.forEach(function (qualquerCoisa, contatador, array) {
  console.log(qualquerCoisa, contatador, array)
})