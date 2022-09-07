import { render, replace, remove } from '../framework/render.js';
import TripEventItemView from '../view/trip-event-item-view.js';
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

  constructor(container, offersModel, destinationModel, changeData, changeMode) {
    this.#container = container;
    this.#offerModel = offersModel;
    this.#destinationModel = destinationModel;
    this.#changeData = changeData;
    this.#changeMode = changeMode;
  }

  init = (point) => {
    this.#point = point;

    const prevTripEventItemComponent = this.#tripEventItemComponent;
    const prevEditEventComponent = this.#editEventComponent;

    this.#tripEventItemComponent = new TripEventItemView(this.#point, this.#offerModel, this.#destinationModel);
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

  #replaceItemToForm = () => {
    replace(this.#editEventComponent, this.#tripEventItemComponent);
    document.addEventListener('keydown', this.#onEscKeyDown);
    this.#changeMode();
    this.#mode = Mode.EDITING;
  };

  #replaceFormToItem = () => {
    replace(this.#tripEventItemComponent, this.#editEventComponent);
    document.removeEventListener('keydown', this.#onEscKeyDown);
    this.#mode = Mode.DEFAULT;
  };

  #onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceFormToItem();
      document.removeEventListener('keydown', this.#onEscKeyDown);
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
