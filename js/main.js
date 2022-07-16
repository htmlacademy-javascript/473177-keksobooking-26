import './form.js';
import {renderMarkers} from './map.js';
import { renderSimilarObjects } from './popup.js';
import './slider.js';
import { getData } from './api.js';

const SIMILAR_OBJECTS_COUNT = 10;

getData((objects) => {
  renderSimilarObjects(objects.slice(0, SIMILAR_OBJECTS_COUNT));
  renderMarkers(objects.slice(0, SIMILAR_OBJECTS_COUNT));
});
