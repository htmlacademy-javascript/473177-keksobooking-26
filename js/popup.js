const offerNameByType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  palace: 'Дворец',
  house: 'Дом',
  hotel: 'Отель',
};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const objectsListElement = document.createElement('div');

const renderSimilarObjects = (similarObjects) => {
  const objectsListFragment = document.createDocumentFragment();
  similarObjects.forEach((object) => {
    const objectElement = cardTemplate.cloneNode(true);
    const titleElement = objectElement.querySelector('.popup__title');
    const capacityElement = objectElement.querySelector('.popup__text--capacity');
    const timeElement = objectElement.querySelector('.popup__text--time');
    const addressElement = objectElement.querySelector('.popup__text--address');
    const priceElement = objectElement.querySelector('.popup__text--price');
    const typeElement = objectElement.querySelector('.popup__type');
    const featuresContainerElement = objectElement.querySelector('.popup__features');
    const featuresListElement = featuresContainerElement.querySelectorAll('.popup__feature');
    const descriptionElement = objectElement.querySelector('.popup__description');
    const photoElement = objectElement.querySelector('.popup__photo');
    const photosElement = objectElement.querySelector('.popup__photos');
    const avatarElement = objectElement.querySelector('.popup__avatar');

    //title
    if (object.offer.title.length < 5) {
      titleElement.classList.add('visually-hidden');
    } else {
      titleElement.textContent = object.offer.title;
    }
    //address
    addressElement.textContent = object.offer.address;
    //price
    priceElement.textContent = `${object.offer.price}₽/ночь`;
    //type
    typeElement.textContent = offerNameByType[object.offer.type];

    //rooms and guests
    if ((object.offer.rooms === 1) & (object.offer.guests === 1)) {
      capacityElement.textContent = `${object.offer.rooms} комната для ${object.offer.guests} гостя`;
    } else if ((object.offer.rooms !== 1) & (object.offer.guests === 1)) {
      capacityElement.textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостя`;
    } else if ((object.offer.rooms === 1) & (object.offer.guests !== 1)) {
      capacityElement.textContent = `${object.offer.rooms} комната для ${object.offer.guests} гостей`;
    } else {
      capacityElement.textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостей`;
    }

    timeElement.textContent = `Заезд после ${object.offer.checkin}, выезд до ${object.offer.checkout}`;

    //features
    if (object.offer.features) {
      featuresListElement.forEach((featuresListItem) => {
        const isNecessary = object.offer.features.some((feature) => featuresListItem.classList.contains(`popup__feature--${  feature}`),);
        if (!isNecessary) {
          featuresListItem.remove();
        }
      });
    }

    //description
    if (object.offer.description) {
      if (object.offer.description.length < 10) {
        descriptionElement.classList.add('visually-hidden');
      } else {
        descriptionElement.textContent = object.offer.description;
      }
    }

    //photos
    if (object.offer.photos) {
      photosElement.innerHTML = '';
      object.offer.photos.forEach((photoUrl) => {
        const pictureElement = photoElement.cloneNode(true);
        pictureElement.src = photoUrl;
        photosElement.append(pictureElement);
      });
    }

    //avatar
    avatarElement.src = object.author.avatar;
    objectsListFragment.append(objectElement);
  });
  objectsListElement.innerHTML = '';
  objectsListElement.append(objectsListFragment);
  return objectsListElement;
};

export {objectsListElement, renderSimilarObjects};
