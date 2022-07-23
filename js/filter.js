const typeInputElement = document.querySelector('[name="housing-type"]');
const priceInputElement = document.querySelector('[name="housing-price"]');
const roomsInputElement = document.querySelector('[name="housing-rooms"]');
const guestsInputElement = document.querySelector('[name="housing-guests"]');
const featuresInputsElement = document.querySelector('#housing-features');
const mapFiltersElement = document.querySelector('.map__filters');

const filterFeatures = (object) => {
  const featuresCheckedElements = featuresInputsElement.querySelectorAll('input:checked');
  if (featuresCheckedElements.length === 0) {
    return true;
  } else if (!object.offer.features) {
    return false;
  }
  return Array.from(featuresCheckedElements).every((feature) => object.offer.features.includes(feature.value));
};

const filterType = (object) => {
  if (object.offer.type === typeInputElement.value || typeInputElement.value === 'any') {
    return true;
  }
  return false;
};

const filterRooms = (object) => {
  if (object.offer.rooms === Number(roomsInputElement.value) || roomsInputElement.value === 'any') {
    return true;
  }
  return false;
};

const filterGuests = (object) => {
  if (object.offer.guests === Number(guestsInputElement.value) || guestsInputElement.value === 'any') {
    return true;
  }
  return false;
};

const filterPrice = (object) => {
  switch (priceInputElement.value) {
    case 'any':
      return true;
    case 'low':
      return object.offer.price < 10000;
    case 'middle':
      return object.offer.price >= 10000 & object.offer.price <= 50000;
    case 'high':
      return object.offer.price > 50000;
  }
};

const filterObjects = (object) =>
  filterFeatures(object) & filterGuests(object) & filterRooms(object) & filterType(object) & filterPrice(object);


const onFilterChange = (cb) => {
  mapFiltersElement.addEventListener('change', cb);
};

const resetFilters = () => {
  mapFiltersElement.reset();
};

export {filterObjects, onFilterChange, resetFilters};
