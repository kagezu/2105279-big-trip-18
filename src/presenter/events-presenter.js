import { render, remove } from '../framework/render.js';
import SortEventView from '../view/sort-event-view.js';
import TripEventListView from '../view/trip-event-list-view.js';
import EmptyListView from '../view/empty-list-view.js';
import PointPresenter from './point-presenter.js';
import { updatePoint } from '../utils/common.js';

export default class EventsPresenter {
  #eventsContainer;
  #container;
  #points;
  #offerModel;
  #destinationModel;
  #sortEventComponent;
  #emptyListComponent;
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
      remove(this.#emptyListComponent);
      return;
    }
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
    remove(this.#eventsContainer);
    remove(this.#sortEventComponent);
  };

  #renderContainer = () => {
    this.#eventsContainer = new TripEventListView();
    render(this.#eventsContainer, this.#container);
  };

  #renderEmpty = () => {
    this.#emptyListComponent = new EmptyListView();
    render(this.#emptyListComponent, this.#container);
  };

  #renderSort = () => {
    this.#sortEventComponent = new SortEventView();
    render(this.#sortEventComponent, this.#container);
  };

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(
      this.#eventsContainer.element,
      this.#offerModel,
      this.#destinationModel,
      this.#handlePointChange,
      this.#handleModeChange
    );
    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, pointPresenter);
  };

  #handlePointChange = (updatedPoint) => {
    this.#points = updatePoint(this.#points, updatedPoint);
    this.#pointPresenter.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  };

}
