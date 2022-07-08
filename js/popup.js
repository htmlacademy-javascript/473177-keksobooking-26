import {createObjects} from './data.js';
const offerNameByType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  palace: 'Дворец',
  house: 'Дом',
  hotel: 'Отель',
};

const mapCanvas = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const objectsList = document.createElement('div');
const similarObjects = createObjects();

similarObjects.forEach((object) => {
  const objectElement = cardTemplate.cloneNode(true);
  //title
  if (object.offer.title.length < 5) {
    objectElement.querySelector('.popup__title').classList.add('visually-hidden');
  } else {
    objectElement.querySelector('.popup__title').textContent = object.offer.title;
  }
  //address
  objectElement.querySelector('.popup__text--address').textContent = object.offer.address;
  //price
  objectElement.querySelector('.popup__text--price').textContent = `${object.offer.price}₽/ночь`;
  //type
  objectElement.querySelector('.popup__type').textContent = offerNameByType[object.offer.type];

  //rooms and guests
  if ((object.offer.rooms === 1) & (object.offer.guests === 1)) {
    objectElement.querySelector('.popup__text--capacity').textContent = `${object.offer.rooms} комната для ${object.offer.guests} гостя`;
  } else if ((object.offer.rooms !== 1) & (object.offer.guests === 1)) {
    objectElement.querySelector('.popup__text--capacity').textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостя`;
  } else if ((object.offer.rooms === 1) & (object.offer.guests !== 1)) {
    objectElement.querySelector('.popup__text--capacity').textContent = `${object.offer.rooms} комната для ${object.offer.guests} гостей`;
  } else {
    objectElement.querySelector('.popup__text--capacity').textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостей`;
  }

  objectElement.querySelector('.popup__text--time').textContent = `Заезд после ${object.offer.checkin}, выезд до ${object.offer.checkout}`;

  //features
  const featuresContainer = objectElement.querySelector('.popup__features');
  const featuresList = featuresContainer.querySelectorAll('.popup__feature');
  featuresList.forEach((featuresListItem) => {
    const isNecessary = object.offer.features.some((feature) => featuresListItem.classList.contains(`popup__feature--${  feature}`),);
    if (!isNecessary) {
      featuresListItem.remove();
    }
  });

  //description
  if (object.offer.description.length < 10) {
    objectElement.querySelector('.popup__description').classList.add('visually-hidden');
  } else {
    objectElement.querySelector('.popup__description').textContent = object.offer.description;
  }

  //photos
  const photo = objectElement.querySelector('.popup__photo');
  photo.src = object.offer.photos[0];
  const photos = objectElement.querySelector('.popup__photos');
  for (let i = 1; i < object.offer.photos.length; i++) {
    const picture = photo.cloneNode(true);
    picture.src = object.offer.photos[i];
    photos.append(picture);
  }

  //avatar
  objectElement.querySelector('.popup__avatar').src = object.author.avatar;
  objectsList.append(objectElement);
});

mapCanvas.appendChild(objectsList.firstChild);
