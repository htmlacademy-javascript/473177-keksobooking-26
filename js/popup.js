const offerNameByType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  palace: 'Дворец',
  house: 'Дом',
  hotel: 'Отель',
};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const objectsList = document.createElement('div');

const renderSimilarObjects = (similarObjects) => {
  const objectsListFragment = document.createDocumentFragment();
  similarObjects.forEach((object) => {
    const objectElement = cardTemplate.cloneNode(true);
    const title = objectElement.querySelector('.popup__title');
    const capacity = objectElement.querySelector('.popup__text--capacity');
    const time = objectElement.querySelector('.popup__text--time');
    const address = objectElement.querySelector('.popup__text--address');
    const price = objectElement.querySelector('.popup__text--price');
    const type = objectElement.querySelector('.popup__type');
    const featuresContainer = objectElement.querySelector('.popup__features');
    const featuresList = featuresContainer.querySelectorAll('.popup__feature');
    const description = objectElement.querySelector('.popup__description');
    const photo = objectElement.querySelector('.popup__photo');
    const photos = objectElement.querySelector('.popup__photos');
    const avatar = objectElement.querySelector('.popup__avatar');

    //title
    if (object.offer.title.length < 5) {
      title.classList.add('visually-hidden');
    } else {
      title.textContent = object.offer.title;
    }
    //address
    address.textContent = object.offer.address;
    //price
    price.textContent = `${object.offer.price}₽/ночь`;
    //type
    type.textContent = offerNameByType[object.offer.type];

    //rooms and guests
    if ((object.offer.rooms === 1) & (object.offer.guests === 1)) {
      capacity.textContent = `${object.offer.rooms} комната для ${object.offer.guests} гостя`;
    } else if ((object.offer.rooms !== 1) & (object.offer.guests === 1)) {
      capacity.textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостя`;
    } else if ((object.offer.rooms === 1) & (object.offer.guests !== 1)) {
      capacity.textContent = `${object.offer.rooms} комната для ${object.offer.guests} гостей`;
    } else {
      capacity.textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостей`;
    }

    time.textContent = `Заезд после ${object.offer.checkin}, выезд до ${object.offer.checkout}`;

    //features
    if (object.offer.features) {
      featuresList.forEach((featuresListItem) => {
        const isNecessary = object.offer.features.some((feature) => featuresListItem.classList.contains(`popup__feature--${  feature}`),);
        if (!isNecessary) {
          featuresListItem.remove();
        }
      });
    }

    //description
    if (object.offer.description) {
      if (object.offer.description.length < 10) {
        description.classList.add('visually-hidden');
      } else {
        description.textContent = object.offer.description;
      }
    }

    //photos
    if (object.offer.photos) {
      photo.src = object.offer.photos[0];
      for (let i = 1; i < object.offer.photos.length; i++) {
        const picture = photo.cloneNode(true);
        picture.src = object.offer.photos[i];
        photos.append(picture);
      }
    }
    //avatar
    avatar.src = object.author.avatar;
    objectsListFragment.append(objectElement);
  });
  objectsList.innerHTML = '';
  objectsList.append(objectsListFragment);
};

export {objectsList, renderSimilarObjects};
