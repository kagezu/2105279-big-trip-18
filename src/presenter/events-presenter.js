import { render, remove } from '../framework/render.js';
import SortEventView from '../view/sort-event-view.js';
import TripEventListView from '../view/trip-event-list-view.js';
import EmptyListView from '../view/empty-list-view.js';
import PointPresenter from './point-presenter.js';
import { updatePoint, sortTime, sortPrice } from '../utils/common.js';
import { SortType } from '../const.js';

export default class EventsPresenter {
  #eventsContainer;
  #container;
  #points;
  #offerModel;
  #destinationModel;
  #sortEventComponent;
  #emptyListComponent;
  #pointPresenter = new Map();
  #currentSortType = SortType.DAY;
  #sourcePoints = [];

  constructor(container, offersModel, destinationModel) {
    this.#container = container;
    this.#offerModel = offersModel;
    this.#destinationModel = destinationModel;
  }

  init = (points) => {
    this.#points = points;
    this.#sourcePoints = [...points];

    if (!this.#points.length) {
      this.#renderEmpty();
      return;
    }
    this.#renderSort();
    this.#renderEventList();
  };

  #renderEventList = () => {
    this.#renderContainer();
    this.#points.forEach(this.#renderPoint);
  };

  #clearEventList = () => {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
    remove(this.#eventsContainer);
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
    this.#sortEventComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
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
    this.#sourcePoints = updatePoint(this.#sourcePoints, updatedPoint);
    this.#pointPresenter.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  };

  // Сортировка

  #sortPoints = (sortType) => {
    switch (sortType) {
      case SortType.TIME:
        this.#points.sort(sortTime);
        break;
      case SortType.PRICE:
        this.#points.sort(sortPrice);
        break;
      case SortType.DAY:
        this.#points = [...this.#sourcePoints];
        break;
      default:
        return;
    }
    this.#currentSortType = sortType;
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#sortPoints(sortType);
    this.#clearEventList();
    this.#renderEventList();
  };
}
