import TripInfoView from './view/trip-info-view.js';
import { render, RenderPosition } from './render.js';

const headerContainer = document.querySelector('.trip-main');
render(new TripInfoView(), headerContainer, RenderPosition.BEFOREBEGIN);
