import './form.js';
import {renderMarkers} from './map.js';
import { renderSimilarObjects } from './popup.js';
import './slider.js';
import { getData } from './api.js';
import { filterObjects, onFilterChange } from './filter.js';
import { debounce } from './util.js';

const SIMILAR_OBJECTS_COUNT = 10;
const RERENDER_DELAY = 500;

const renderObjectsOnMap = (objects) => {
  const filteredObjects = objects.filter(filterObjects);
  const filteredObjectsNew = filteredObjects.slice(0, SIMILAR_OBJECTS_COUNT);
  renderSimilarObjects(filteredObjectsNew);
  renderMarkers(filteredObjectsNew);
};

getData((objects) => {
  renderObjectsOnMap(objects);
  onFilterChange(debounce(
    () => {
      renderObjectsOnMap(objects);
    }), RERENDER_DELAY);
});
