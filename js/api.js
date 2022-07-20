import { showAlertMessage } from './util.js';

const URL_SERVER_GET = 'https://26.javascript.pages.academy/keksobooking/data';
const URL_SERVER_SEND = 'https://26.javascript.pages.academy/keksobooking';

const getData = (onSuccess) => {
  fetch(URL_SERVER_GET)
    .then((responce) => responce.json())
    .then((objects) => onSuccess(objects))
    .catch(() => showAlertMessage('Что-то пошло не так на сервере'));
};


const sendData = (onSuccess, onFail, body) => {
  fetch(URL_SERVER_SEND,
    {
      method: 'POST',
      body,
    })
    .then((responce) => {
      if (responce.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
