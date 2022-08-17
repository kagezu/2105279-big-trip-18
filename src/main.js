import EventsPresenter from './presenter/events-presenter.js';
import InfoPresenter from './presenter/info-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';

const infoContainer = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');

const infoPresenter = new InfoPresenter();
const filterPresenter = new FilterPresenter();
const eventsPresenter = new EventsPresenter();

infoPresenter.init(infoContainer);
filterPresenter.init(filterContainer);
eventsPresenter.init(eventsContainer);
