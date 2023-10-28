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
const moreExpensive = (data, category) => {
  let nomeMaisCaro = '';
  let maisCaro = 0;

  for (let index = 0; index < data[category].length; index += 1) {
    const item = data[category][index];

    if (item.price > maisCaro) {
      nomeMaisCaro = item.name;
      maisCaro = item.price;
    }
  }

  return `O produto mais caro é: ${nomeMaisCaro}, que custa: R$${maisCaro.toFixed(2)}.`;
};

// Requisito 5 - Crie uma função que verifica se um determinado item já existe
const checkItem = (data, category, item) => {
  for (let index = 0; index < data[category].length; index += 1) {
    if (item === data[category][index].name) {
      return true;
    }
  }
  return false;
};
checkItem(menu, 'sandwiches', 'Big Tasty');
// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista
addNewItem = (data, category, item, price, ingredients, calories) => {
  if (checkItem(data, category, item)) {
    return `O produto: "${item}" já existe!`;
  }

  const novoItem = {
    name: item,
    price,
    ingredients,
    calories,
  };

  data[category].push(novoItem);
  return novoItem;
};

// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero
const counterGender = (data) => {
  let male = 0;
  let female = 0;

  for (let index = 0; index < data.guests.length; index += 1) {
    if (data.guests[index].gender === 'male') {
      male += 1;
    } else if (data.guests[index].gender === 'female') {
      female += 1;
    }
  }

  return {
    male,
    female,
  };
};

// =================================================
// PARTE 3
// =================================================

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado

function filterState(data, state) {
  let index;
  let stateElements = [];
  let countArray = 0;
  for (index = 0; index < data.guests.length; index += 1) {
    let stateArray = data.guests[index].address.state;
    if (stateArray === state) {
      stateElements[countArray] = data.guests[index];
      countArray += 1;
    }
  } return stateElements;
}

// Requisito 9 - Crie uma função que altera a propriedade `picture`
function changePicture(data, link) {
  for (let index = 0; index < data.guests.length; index += 1) {
    data.guests[index].picture = link;
    console.log(data.guests[index]);
  }
  return data.guests;
}
/* console.log(guestsDatabase.guests[0].picture); */
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
