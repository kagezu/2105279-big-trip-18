import { render, remove } from '../framework/render.js';
import SortEventView from '../view/sort-event-view.js';
import TripEventListView from '../view/trip-event-list-view.js';
// import NewEventView from '../view/new-event-view.js';
import EmptyListView from '../view/empty-list-view.js';
import PointPresenter from './point-presenter.js';
import { updatePoint } from '../utils/common.js';

export default class EventsPresenter {
  #eventsContainer;
  #container;
  #points;
  #offerModel;
  #destinationModel;
  #sortEventView;
  #emptyListView;
  #pointPresenter = new Map();

  constructor(container, offersModel, destinationModel) {
    this.#container = container;
    this.#offerModel = offersModel;
    this.#destinationModel = destinationModel;
  }

  init = (points) => {
    this.#points = points;
    this.#renderEventList();
  };

  #renderEventList = () => {
    if (!this.#points.length) {
      this.#renderEmpty();
      return;
    }
    this.#renderSort();
    this.#renderContainer();
    this.#points.forEach(this.#renderPoint);
  };

  #clearEventList = () => {
    if (!this.#points.length) {
      remove(this.#emptyListView);
      return;
    }
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
    remove(this.#eventsContainer);
    remove(this.#sortEventView);
  };

  #renderContainer = () => {
    this.#eventsContainer = new TripEventListView();
    render(this.#eventsContainer, this.#container);
  };

  #renderEmpty = () => {
    this.#emptyListView = new EmptyListView();
    render(this.#emptyListView, this.#container);
  };

  #renderSort = () => {
    this.#sortEventView = new SortEventView();
    render(this.#sortEventView, this.#container);
  };

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(this.#eventsContainer.element, this.#offerModel, this.#destinationModel);
    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, pointPresenter);
  };

  #handlePointChange = (updatedPoint) => {
    this.#points = updatePoint(this.#points, updatedPoint);
    this.#pointPresenter.get(updatedPoint.id).init(updatedPoint);
  };
}
