
function getRandomInteger(min, max) {
  if ((min >= 0) && (min < max)) {
    let randomNumber = Math.random()*(max - min + 1) + min;
    return Math.floor(randomNumber);
  }

  return 'Неправильно задан диапазон';
}

function getRandomFloat (min, max, fixed) {
  if ((min >= 0) && (min < max)) {
    let randomNumber = Math.random()*(max - min) + min;
    return randomNumber.toFixed(fixed);
  }

  return 'Неправильно задан диапазон';
}

getRandomInteger(10, 20);
getRandomFloat(1.5, 1.8889, 3);
