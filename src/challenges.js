const menu = require('./mcDonalds');
const guestsDatabase = require('./data.json');

// =================================================
// PARTE 1
// =================================================

// Requisito 1 - Crie uma função que divida uma frase

function splitSentence(phrase) {
  let arraywords = phrase.split(' ');
  return arraywords;
}

splitSentence('go Trybe');

// Requisito 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointTies = ties;
  let totalPoints = pointsWins + pointTies;
  return totalPoints;
}

footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);

// Requisito 3 - Crie uma função que adiciona músicas em uma playlist
let playlist = [];
function addMusics(artistName, musicName, musicTime) {
  if (playlist.length === 0) {
    playlist.unshift({
      artist: artistName,
      music: musicName,
      musicTime,
    });
  } else {
    playlist.push({
      artist: artistName,
      music: musicName,
      musicTime,
    });
  }
  return playlist;
}
/* addMusics('Survivor', 'Eye of the Tiger', 2.62);
addMusics('Roy Orbison', 'Pretty Woman', 2.73);
addMusics('Lady Gaga', 'Just Dance', 2.66); */

// =================================================
// PARTE 2
// =================================================

// Requisito 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria

// Requisito 5 - Crie uma função que verifica se um determinado item já existe
let nome = [];
function checkItem(data, category, item) {
  for (let index = 0; index < data[category].length; index += 1) {
    nome = data[category][index];
    if (nome.name === item) {
      return true;
    }
    return false;
  }
}
checkItem(menu, 'sandwiches', 'Big Tasty');
// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista

// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero

// =================================================
// PARTE 3
// =================================================

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado

// Requisito 9 - Crie uma função que altera a propriedade `picture`

// Requisito 10 - Crie um função que gera um relatório

// Não modifique as linhas abaixo
module.exports = {
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  addMusics: typeof addMusics === 'function' ? addMusics : (() => { }),
  playlist: typeof playlist === 'undefined' ? [] : playlist,
  moreExpensive: typeof moreExpensive === 'function' ? moreExpensive : (() => { }),
  checkItem: typeof checkItem === 'function' ? checkItem : (() => { }),
  addNewItem: typeof addNewItem === 'function' ? addNewItem : (() => { }),
  counterGender: typeof counterGender === 'function' ? counterGender : (() => { }),
  filterState: typeof filterState === 'function' ? filterState : (() => { }),
  changePicture: typeof changePicture === 'function' ? changePicture : (() => { }),
  generateReport: typeof generateReport === 'function' ? generateReport : (() => { }),
};
