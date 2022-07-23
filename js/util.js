const ALERT_SHOW_TIME = 5000;

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomPositiveFloat = (a, b, digits = 5) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

const formAdElement = document.querySelector('.ad-form');
const formMapElement = document.querySelector('.ad-form');

const makeFormsInactive = () => {
  formAdElement.classList.add('ad-form--disabled');
  formMapElement.classList.add('ad-form--disabled');
  formAdElement.childNodes.forEach((child) => {
    child.disabled = true;
  });
  formMapElement.childNodes.forEach((child) => {
    child.disabled = true;
  });
};

const makeFormsActive = () => {
  formAdElement.classList.remove('ad-form--disabled');
  formMapElement.classList.remove('ad-form--disabled');
  formAdElement.childNodes.forEach((child) => {
    child.disabled = false;
  });
  formMapElement.childNodes.forEach((child) => {
    child.disabled = false;
  });
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlertMessage = (message) => {
  const alertElement = document.createElement('div');
  alertElement.style.zIndex = '100';
  alertElement.style.position = 'absolute';
  alertElement.style.left = '0';
  alertElement.style.top = '0';
  alertElement.style.right = '0';
  alertElement.style.padding = '10px 3px';
  alertElement.style.fontSize = '30px';
  alertElement.style.textAlign = 'center';
  alertElement.style.backgroundColor = 'red';

  alertElement.textContent = message;

  document.body.append(alertElement);

  setTimeout(() => {
    alertElement.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};


export {getRandomPositiveFloat, getRandomPositiveInteger, showAlertMessage, isEscapeKey, makeFormsActive, makeFormsInactive, debounce};
