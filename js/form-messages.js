import { isEscapeKey } from './util.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessageElement = successMessageTemplate.cloneNode(true);
successMessageElement.classList.add('hidden');
document.body.appendChild(successMessageElement);


const hideSuccessMessage = () => {
  successMessageElement.classList.add('hidden');
  document.removeEventListener('click', onSuccessClick);
  document.removeEventListener('keydown', onSuccessKeydown);
};


const showSuccessMessage = () => {
  successMessageElement.classList.remove('hidden');
  document.addEventListener('click', onSuccessClick);
  document.addEventListener('keydown', onSuccessKeydown);
};

function onSuccessClick (evt) {
  evt.preventDefault();
  hideSuccessMessage();
}

function onSuccessKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideSuccessMessage();
  }
}


const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessageElement = errorMessageTemplate.cloneNode(true);
document.body.appendChild(errorMessageElement);
errorMessageElement.classList.add('hidden');
const closeErrorButtonElement = document.querySelector('.error__button');

const hideErrorMessage = () => {
  errorMessageElement.classList.add('hidden');
  document.removeEventListener('click', onErrorClick);
  document.removeEventListener('keydown', onErrorKeydown);
};


const showErrorMessage = () => {
  errorMessageElement.classList.remove('hidden');
  document.addEventListener('click', onErrorClick);
  document.addEventListener('keydown', onErrorKeydown);
  closeErrorButtonElement.addEventListener('click', hideErrorMessage);
};

function onErrorClick (evt) {
  evt.preventDefault();
  hideErrorMessage();
}

function onErrorKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideErrorMessage();
  }
}

export {showSuccessMessage , showErrorMessage};


