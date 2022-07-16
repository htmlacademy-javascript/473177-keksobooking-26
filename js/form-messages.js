import { isEscapeKey } from './util.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessage = successMessageTemplate.cloneNode(true);
successMessage.classList.add('hidden');
document.body.appendChild(successMessage);

const onSuccessEsckeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    hideSuccessMessage();
  }
};

const onSuccessClick = (evt) => {
  evt.preventDefault();
  // eslint-disable-next-line no-use-before-define
  hideSuccessMessage();
};


const showSuccessMessage = () => {
  successMessage.classList.remove('hidden');
  document.addEventListener('click', onSuccessClick);
  document.addEventListener('keydown', onSuccessEsckeydown);
};

const hideSuccessMessage = () => {
  successMessage.classList.add('hidden');
  document.removeEventListener('click', onSuccessClick);
  document.removeEventListener('keydown', onSuccessEsckeydown);
};

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessage = errorMessageTemplate.cloneNode(true);
document.body.appendChild(errorMessage);
errorMessage.classList.add('hidden');
const closeErrorButton = document.querySelector('.error__button');

const hideErrorMessage = () => {
  errorMessage.classList.add('hidden');
  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('click', onErrorClick);
  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', onErrorEscapedown);
};

const onErrorClick = (evt) => {
  evt.preventDefault();
  hideErrorMessage();
};

const onErrorEscapedown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideErrorMessage();
  }
};

const showErrorMessage = () => {
  errorMessage.classList.remove('hidden');
  document.addEventListener('click', onErrorClick);
  document.addEventListener('keydown', onErrorEscapedown);
  closeErrorButton.addEventListener('click', hideErrorMessage);
};

export {showSuccessMessage , showErrorMessage};


