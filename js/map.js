import {makeFormsActive} from './form.js';
import {objectsList, similarObjects} from './popup.js';

const map = L.map('map-canvas')
  .on('load', () => {
    makeFormsActive();
  })
  .setView({
    lat: 35.4122,
    lng: 139.4130,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: 35.4200,
    lng: 139.2530,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

mainMarker.addTo(map);

const addressField = document.querySelector('#address');
mainMarker.on('moveend', (evt) => {
  const latLng = evt.target.getLatLng();
  const lat = latLng.lat.toFixed(4);
  const lng = latLng.lng.toFixed(4);
  addressField.value = `${lat}, ${lng}`;
});

const pin = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (point, popup) => {
  const marker = L.marker(
    {
      lat: point.location.lat,
      lng: point.location.lng,
    },
    {
      pin,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(popup);
};

for (let i = 0; i < similarObjects.length; i++) {
  createMarker(similarObjects[i], objectsList.childNodes[i]);
}

