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

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandomPositiveFloat (a, b, digits = 5) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

const createImagesLink = (maxCountImage) => {
  for (i = 1; i <= maxCountImage; i++) {
    if (i < 10) {
      return 'img/avatars/user0' + i + '.png';
    }
    return 'img/avatars/user' + i + '.png';
  };
};

const createObject = () => {
  return {
    author: {
      avatar: createImagesLink(COUNT_OBJECT),
    },
    offer: {
      title: TITLE,
      address: location.lat + ',' + location.lng,
      price: getRandomPositiveInteger(0, 100000),
      type: TYPES[getRandomPositiveInteger(0, TYPES.length-1)],
      rooms: getRandomPositiveInteger(1, 4),
      guests: getRandomPositiveInteger(1, 8),
      checkin: CHECK_TIMES[getRandomPositiveInteger(0, CHECK_TIMES.length-1)],
      checkout: CHECK_TIMES[getRandomPositiveInteger(0, CHECK_TIMES.length-1)],
      features: FEATURES.slice(0, getRandomPositiveInteger(2, FEATURES.length-1)),
      description: DESCRIPTION,
      photos: PHOTOS.slice(0, getRandomPositiveInteger(2, PHOTOS.length-1)),
    },
    location: {
      lat: getRandomPositiveFloat(35.65, 35.7),
      lng: getRandomPositiveFloat(139.7, 139.8),
    },
  }
};

const OBJECTS = Array.from({length: COUNT_OBJECT}, createObject);
console.log(OBJECTS);
