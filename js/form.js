const formAd = document.querySelector('.ad-form');
const formMap = document.querySelector('.map__filters');

const makeFormInactive = () => {
  formAd.classList.add('ad-form--disabled');
  formMap.classList.add('.map-filters--disabled');
  formAd.children.disabled = true;
  formMap.children.disabled = true;
};

const makeFormActive = () => {
  formAd.classList.remove('ad-form--disabled');
  formMap.classList.remove('.map-filters--disabled');
  formAd.children.disabled = false;
  formMap.children.disabled = false;
};

const pristine = new Pristine(formAd, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error-text',
});

//Валидация соотношения количества гостей и комнат
const roomsField = formAd.querySelector('[name = "rooms"]');
const guestsField = formAd.querySelector('[name = "capacity"]');
const roomsOption = {
  '1': '1',
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': '0',
};

const validateGuests = () => roomsOption[roomsField.value].includes(guestsField.value);
const getGuestsErrorMessage = () => {
  switch (roomsField.value) {
    case '1': return 'Для 1 гостя';
    case '2': return 'Для 1 или 2 гостей';
    case '3': return 'Для 1, 2 или 3 гостей';
    case '100': return 'Не для гостей';
  }
};

const onRoomsChange = () => {
  pristine.addValidator(guestsField, validateGuests, getGuestsErrorMessage);
};
formAd.querySelectorAll('[name="rooms"]').forEach((item) => item.addEventListener('change', onRoomsChange));


formAd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    console.log('Валидация пройдена');
  } else {
    console.log('что то пошло не так');
  }
});
