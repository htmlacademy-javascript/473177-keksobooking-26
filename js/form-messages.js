import { isEscapeKey } from './util.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessageElement = successMessageTemplate.cloneNode(true);
successMessageElement.classList.add('hidden');
document.body.appendChild(successMessageElement);

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
  successMessageElement.classList.remove('hidden');
  document.addEventListener('click', onSuccessClick);
  document.addEventListener('keydown', onSuccessEsckeydown);
};

const hideSuccessMessage = () => {
  successMessageElement.classList.add('hidden');
  document.removeEventListener('click', onSuccessClick);
  document.removeEventListener('keydown', onSuccessEsckeydown);
};

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessageElement = errorMessageTemplate.cloneNode(true);
document.body.appendChild(errorMessageElement);
errorMessageElement.classList.add('hidden');
const closeErrorButtonElement = document.querySelector('.error__button');

const hideErrorMessage = () => {
  errorMessageElement.classList.add('hidden');
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
  errorMessageElement.classList.remove('hidden');
  document.addEventListener('click', onErrorClick);
  document.addEventListener('keydown', onErrorEscapedown);
  closeErrorButtonElement.addEventListener('click', hideErrorMessage);
};

export {showSuccessMessage , showErrorMessage};


