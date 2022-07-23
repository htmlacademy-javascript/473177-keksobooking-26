import { isEscapeKey } from './util.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessageElement = successMessageTemplate.cloneNode(true);
successMessageElement.classList.add('hidden');
document.body.appendChild(successMessageElement);

const hideSuccessMessage = () => {
  successMessageElement.classList.add('hidden');
  document.removeEventListener('click', (evt) => {
    evt.preventDefault();
    hideSuccessMessage();
  });
  document.removeEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      hideSuccessMessage();
    }
  });
};

const showSuccessMessage = () => {
  successMessageElement.classList.remove('hidden');
  document.addEventListener('click', (evt) => {
    evt.preventDefault();
    hideSuccessMessage();
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      hideSuccessMessage();
    }
  });
};


const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessageElement = errorMessageTemplate.cloneNode(true);
document.body.appendChild(errorMessageElement);
errorMessageElement.classList.add('hidden');
const closeErrorButtonElement = document.querySelector('.error__button');

const hideErrorMessage = () => {
  errorMessageElement.classList.add('hidden');
  document.removeEventListener('click', (evt) => {
    evt.preventDefault();
    hideErrorMessage();
  });
  document.removeEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      hideErrorMessage();
    }
  });
};


const showErrorMessage = () => {
  errorMessageElement.classList.remove('hidden');
  document.addEventListener('click', (evt) => {
    evt.preventDefault();
    hideErrorMessage();
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      hideErrorMessage();
    }
  });
  closeErrorButtonElement.addEventListener('click', hideErrorMessage);
};

export {showSuccessMessage , showErrorMessage};


