import { showAlertMessage } from './util.js';

const URL_SERVER = 'https://26.javascript.pages.academy/keksobooking/data';

const getData = (onSuccess) => {
  fetch(URL_SERVER)
    .then((responce) => responce.json())
    .then((objects) => onSuccess(objects))
    .catch(() => showAlertMessage('Что-то пошло не так на сервере'));
};


const sendData = (onSuccess, onFail, body) => {
  fetch(URL_SERVER,
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
