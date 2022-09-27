import { render, replace, remove } from '../framework/render.js';
import EventView from '../view/event-view.js';
import EditEventView from '../view/edit-event-view.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #container;
  #point;
  #offerModel;
  #destinationModel;
  #tripEventItemComponent = null;
  #editEventComponent = null;
  #changeData = null;
  #changeMode = null;
  #mode = Mode.DEFAULT;

  // Конструктор

  constructor(container, offersModel, destinationModel, changeData, changeMode) {
    this.#container = container;
    this.#offerModel = offersModel;
    this.#destinationModel = destinationModel;
    this.#changeData = changeData;
    this.#changeMode = changeMode;
  }

  // Публичные методы

  init = (point) => {
    this.#point = point;

    const prevTripEventItemComponent = this.#tripEventItemComponent;
    const prevEditEventComponent = this.#editEventComponent;

    this.#tripEventItemComponent = new EventView(this.#point, this.#offerModel, this.#destinationModel);
    this.#editEventComponent = new EditEventView(this.#point, this.#offerModel, this.#destinationModel);

    this.#tripEventItemComponent.setFavoriteClickHandler(this.#handleFavoriteClick);
    this.#tripEventItemComponent.setClickHandler(this.#replaceItemToForm);
    this.#editEventComponent.setFormSubmitHandler(this.#replaceFormToItem);

    if (prevTripEventItemComponent === null || prevEditEventComponent === null) {
      render(this.#tripEventItemComponent, this.#container);
      return;
    }

    if (this.#container.contains(prevTripEventItemComponent.element)) {
      replace(this.#tripEventItemComponent, prevTripEventItemComponent);
    }

    if (this.#container.contains(prevEditEventComponent.element)) {
      replace(this.#editEventComponent, prevEditEventComponent);
    }

    remove(prevTripEventItemComponent);
    remove(prevEditEventComponent);
  };

  resetView = () => {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToItem();
    }
  };

  destroy = () => {
    remove(this.#tripEventItemComponent);
    remove(this.#editEventComponent);
  };

  // Приватные методы

  #replaceItemToForm = () => {
    replace(this.#editEventComponent, this.#tripEventItemComponent);
    document.addEventListener('keydown', this.#handleEscKeyDown);
    this.#changeMode();
    this.#mode = Mode.EDITING;
  };

  #replaceFormToItem = () => {
    replace(this.#tripEventItemComponent, this.#editEventComponent);
    document.removeEventListener('keydown', this.#handleEscKeyDown);
    this.#mode = Mode.DEFAULT;
  };

  // Обработчики событий

  #handleEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceFormToItem();
      document.removeEventListener('keydown', this.#handleEscKeyDown);
    }
  };

  #handleFavoriteClick = () => {
    this.#changeData({ ...this.#point, isFavorite: !this.#point.isFavorite });
  };

  #handleFormSubmit = (point) => {
    this.#changeData(point);
    this.#replaceFormToItem();
  };

}
