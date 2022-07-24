import { sendData } from './api.js';
import { resetFilters } from './filter.js';
import { showSuccessMessage , showErrorMessage } from './form-messages.js';
import { resetMap } from './map.js';
import { resetSlider } from './slider.js';

const formAdElement = document.querySelector('.ad-form');

const MAX_PRICE = 100000;
const minPriceOption = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};
const roomsOption = {
  '1': '1',
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': '0',
};

const pristine = new Pristine(formAdElement, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error-text',
});

//Валидация соотношения количества гостей и комнат
const roomsFieldElement = formAdElement.querySelector('[name = "rooms"]');
const guestsFieldElement = formAdElement.querySelector('[name = "capacity"]');


const validateGuests = () => roomsOption[roomsFieldElement.value].includes(guestsFieldElement.value);
const getGuestsErrorMessage = () => {
  switch (roomsFieldElement.value) {
    case '1': return 'Для 1 гостя';
    case '2': return 'Для 1 или 2 гостей';
    case '3': return 'Для 1, 2 или 3 гостей';
    case '100': return 'Не для гостей';
  }
};

pristine.addValidator(guestsFieldElement, validateGuests, getGuestsErrorMessage);

//Валидация соотношения типа жилья и мин цены за ночь
const typeFieldElement = formAdElement.querySelector('[name="type"]');
const priceFieldElement = formAdElement.querySelector('[name="price"]');
const validatePrice = () => (priceFieldElement.value >= minPriceOption[typeFieldElement.value]) && (priceFieldElement.value <= MAX_PRICE);
const getPriceErrorMessage = () => `Цена должна быть от ${minPriceOption[typeFieldElement.value]} до ${MAX_PRICE}`;
pristine.addValidator(priceFieldElement, validatePrice, getPriceErrorMessage);

//Синхронизация времени заезда и выезда
const timeinElement = formAdElement.querySelector('[name="timein"]');
const timeoutElement = formAdElement.querySelector('[name="timeout"]');
const onChangeTimein = () => {
  timeoutElement.value = timeinElement.value;
};
const onChangeTimeout = () => {
  timeinElement.value = timeoutElement.value;
};
timeinElement.addEventListener('change', onChangeTimein);
timeoutElement.addEventListener('change', onChangeTimeout);


const resetButtonElement = formAdElement.querySelector('.ad-form__reset');
resetButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetFilters();
  formAdElement.reset();
  resetMap();
  resetSlider();
});

const submitButtonElement = formAdElement.querySelector('.ad-form__submit');
const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Опубликовываем...';
};
const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Опубликовать';
};


formAdElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    const formData = new FormData(evt.target);

    sendData(() => {
      showSuccessMessage();
      formAdElement.reset();
      resetFilters();
      resetMap();
      resetSlider();
      unblockSubmitButton();
    },
    () => {
      showErrorMessage();
      unblockSubmitButton();
    }, formData);
  }
});

