import EventsPresenter from './presenter/events-presenter.js';
import InfoPresenter from './presenter/info-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';

import PointModel from './model/point-model.js';
import OfferModel from './model/offer-model.js';
import DestinationModel from './model/destination-model.js';

const infoContainer = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');

const infoPresenter = new InfoPresenter();
const filterPresenter = new FilterPresenter();
const eventsPresenter = new EventsPresenter();

const pointModel = new PointModel();
const offerModel = new OfferModel();
const destinationModel = new DestinationModel();

infoPresenter.init(infoContainer);
filterPresenter.init(filterContainer);
eventsPresenter.init(eventsContainer, pointModel.get(), offerModel, destinationModel);
