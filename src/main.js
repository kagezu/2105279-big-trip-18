import EventsPresenter from './presenter/events-presenter.js';
import InfoPresenter from './presenter/info-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';

import PointModel from './model/point-model.js';
import OfferModel from './model/offer-model.js';
import DestinationModel from './model/destination-model.js';

import { generateFilter } from './mock/filter.js';

const infoContainer = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');

const pointModel = new PointModel();
const offerModel = new OfferModel();
const destinationModel = new DestinationModel();
const filters = generateFilter(pointModel.get());

const infoPresenter = new InfoPresenter(infoContainer);
const filterPresenter = new FilterPresenter(filterContainer, filters);
const eventsPresenter = new EventsPresenter(eventsContainer, offerModel, destinationModel);

infoPresenter.init();
filterPresenter.init();
eventsPresenter.init(pointModel.get());
