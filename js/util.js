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

const formAd = document.querySelector('.ad-form');
const formMap = document.querySelector('.ad-form');

const makeFormsInactive = () => {
  formAd.classList.add('ad-form--disabled');
  formMap.classList.add('ad-form--disabled');
  formAd.childNodes.forEach((child) => {
    child.disabled = true;
  });
  formMap.childNodes.forEach((child) => {
    child.disabled = true;
  });
};

const makeFormsActive = () => {
  formAd.classList.remove('ad-form--disabled');
  formMap.classList.remove('ad-form--disabled');
  formAd.childNodes.forEach((child) => {
    child.disabled = false;
  });
  formMap.childNodes.forEach((child) => {
    child.disabled = false;
  });
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlertMessage = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


export {getRandomPositiveFloat, getRandomPositiveInteger, showAlertMessage, isEscapeKey, makeFormsActive, makeFormsInactive};
