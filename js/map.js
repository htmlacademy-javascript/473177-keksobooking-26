import {makeFormsActive, makeFormsInactive, debounce} from './util.js';
import {renderSimilarObjects} from './popup.js';
import { filterObjects, onFilterChange } from './filter.js';
import { getData } from './api.js';

const SIMILAR_OBJECTS_COUNT = 10;
const RERENDER_DELAY = 500;

makeFormsInactive();

const addressFieldElement = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    makeFormsActive();
  })
  .setView({
    lat: 35.673,
    lng: 139.8328,
  }, 12);

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
    lat: 35.673,
    lng: 139.8328,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);

mainMarker.addTo(map);
addressFieldElement.value = `${mainMarker._latlng.lat.toFixed(5)}, ${mainMarker._latlng.lng.toFixed(5)}`;

mainMarker.on('moveend', (evt) => {
  const latLng = evt.target.getLatLng();
  const lat = latLng.lat.toFixed(4);
  const lng = latLng.lng.toFixed(4);
  addressFieldElement.value = `${lat}, ${lng}`;
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


const renderMarkers = (similarObjects) => {
  const filteredObjects = similarObjects.filter(filterObjects).slice(0, SIMILAR_OBJECTS_COUNT);
  const objectsList = renderSimilarObjects(filteredObjects);
  markerGroup.clearLayers();
  for (let i = 0; i < filteredObjects.length; i++) {
    createMarker(filteredObjects[i], objectsList.childNodes[i]);
  }
};


const showMarkers = () => {
  getData((objects) => {
    renderMarkers(objects);
    onFilterChange(debounce(
      () => {
        renderMarkers(objects);
      }), RERENDER_DELAY);
  });
};

const resetMap = () => {
  map
    .setView({
      lat: 35.673,
      lng: 139.8328,
    }, 12);
  mainMarker
    .setLatLng({
      lat: 35.673,
      lng: 139.8328,
    });
  addressFieldElement.value = `${mainMarker._latlng.lat.toFixed(5)}, ${mainMarker._latlng.lng.toFixed(5)}`;
  showMarkers();
};


export { showMarkers, resetMap};

