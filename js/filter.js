const typeInput = document.querySelector('[name="housing-type"]');
const priceInput = document.querySelector('[name="housing-price"]');
const roomsInput = document.querySelector('[name="housing-rooms"]');
const guestsInput = document.querySelector('[name="housing-guests"]');
const featuresInputs = document.querySelector('#housing-features');
const mapFilters = document.querySelector('.map__filters');

const filterFeatures = (object) => {
  const featuresChecked = featuresInputs.querySelectorAll('input:checked');
  if (featuresChecked.length === 0) {
    return true;
  } else if (!object.offer.features) {
    return false;
  }
  return Array.from(featuresChecked).every((feature) => object.offer.features.includes(feature.value));
};

const filterType = (object) => {
  if (object.offer.type === typeInput.value || typeInput.value === 'any') {
    return true;
  }
  return false;
};

const filterRooms = (object) => {
  if (object.offer.rooms === Number(roomsInput.value) || roomsInput.value === 'any') {
    return true;
  }
  return false;
};

const filterGuests = (object) => {
  if (object.offer.guests === Number(guestsInput.value) || guestsInput.value === 'any') {
    return true;
  }
  return false;
};

const filterPrice = (object) => {
  switch (priceInput.value) {
    case 'any':
      return true;
    case 'low':
      if (object.offer.price < 10000) {
        return true;
      } else {
        return false;
      }
    case 'middle':
      if (object.offer.price >= 10000 & object.offer.price <= 50000) {
        return true;
      } else {
        return false;
      }
    case 'high':
      if (object.offer.price > 50000) {
        return true;
      } else {
        return false;
      }
  }
};

const filterObjects = (object) =>
  filterFeatures(object) & filterGuests(object) & filterRooms(object) & filterType(object) & filterPrice(object);


const onFilterChange = (cb) => {
  mapFilters.addEventListener('change', cb);
};

export {filterObjects, onFilterChange};
