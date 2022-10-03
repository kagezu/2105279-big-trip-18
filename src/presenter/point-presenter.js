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
  #eventComponent = null;
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

    const prevEventComponent = this.#eventComponent;
    const prevEditEventComponent = this.#editEventComponent;

    this.#eventComponent = new EventView(this.#point, this.#offerModel, this.#destinationModel);
    this.#editEventComponent = new EditEventView(this.#point, this.#offerModel, this.#destinationModel);

    this.#eventComponent.setFavoriteClickHandler(this.#handleFavoriteClick);
    this.#eventComponent.setClickHandler(this.#replaceItemToForm);
    this.#editEventComponent.setFormSubmitHandler(this.#replaceFormToItem);

    if (prevEventComponent === null || prevEditEventComponent === null) {
      render(this.#eventComponent, this.#container);
      return;
    }

    if (this.#container.contains(prevEventComponent.element)) {
      replace(this.#eventComponent, prevEventComponent);
    }

    if (this.#container.contains(prevEditEventComponent.element)) {
      replace(this.#editEventComponent, prevEditEventComponent);
    }

    remove(prevEventComponent);
    remove(prevEditEventComponent);

    // this.#editEventComponent;

  };

  resetView = () => {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToItem();
    }
  };

  destroy = () => {
    remove(this.#eventComponent);
    remove(this.#editEventComponent);
  };

  // Приватные методы

  #replaceItemToForm = () => {
    replace(this.#editEventComponent, this.#eventComponent);
    document.addEventListener('keydown', this.#handleEscKeyDown);
    this.#changeMode();
    this.#mode = Mode.EDITING;
  };

  #replaceFormToItem = () => {
    replace(this.#eventComponent, this.#editEventComponent);
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
