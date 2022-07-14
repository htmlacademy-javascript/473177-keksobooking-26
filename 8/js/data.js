import {getRandomPositiveFloat, getRandomPositiveInteger} from './util.js';

const COUNT_OBJECT = 10;
const TITLE = 'Заголовок предложения';
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const CHECK_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTION = 'Описание объекта';
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createImageLinks = (maxCountImage) => {
  const imageLinks = [];
  for (let i = 1; i <= maxCountImage; i++) {
    if (i < 10) {
      imageLinks[i-1] = `img/avatars/user0${  i  }.png`;
    } else {
      imageLinks[i-1] = `img/avatars/user${  i  }.png`;
    }
  }
  return imageLinks;
};

let indexImageLink = 0;
const getImageLink = () => {
  const imageLinks = createImageLinks(COUNT_OBJECT);
  indexImageLink++;
  return imageLinks[indexImageLink-1];
};

const createObject = () => {
  const LOCATION_LAT = getRandomPositiveFloat(35.65, 35.7);
  const LOCATION_LNG = getRandomPositiveFloat(139.7, 139.8);

  return {
    author: {
      avatar: getImageLink(),
    },
    offer: {
      title: TITLE,
      address: `${LOCATION_LAT},${LOCATION_LNG}`,
      price: getRandomPositiveInteger(0, 100000),
      type: TYPES[getRandomPositiveInteger(0, TYPES.length-1)],
      rooms: getRandomPositiveInteger(1, 4),
      guests: getRandomPositiveInteger(1, 8),
      checkin: CHECK_TIMES[getRandomPositiveInteger(0, CHECK_TIMES.length-1)],
      checkout: CHECK_TIMES[getRandomPositiveInteger(0, CHECK_TIMES.length-1)],
      features: FEATURES.slice(0, getRandomPositiveInteger(2, FEATURES.length-1)),
      description: DESCRIPTION,
      photos: PHOTOS.slice(0, getRandomPositiveInteger(1, PHOTOS.length)),
    },
    location: {
      lat: LOCATION_LAT,
      lng: LOCATION_LNG,
    },
  };
};

const createObjects = () => Array.from({length: COUNT_OBJECT}, createObject);

export {createObjects};

