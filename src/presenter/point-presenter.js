import { render, replace, remove } from '../framework/render.js';
import TripEventItemView from '../view/trip-event-item-view.js';
import EditEventView from '../view/edit-event-view.js';

export default class PointPresenter {
  #container;
  #point;
  #offerModel;
  #destinationModel;
  #tripEventItemComponent = null;
  #editEventComponent = null;
  #changeData = null;

  constructor(container, offersModel, destinationModel, changeData) {
    this.#container = container;
    this.#offerModel = offersModel;
    this.#destinationModel = destinationModel;
    this.#changeData = changeData;
  }

  init = (point) => {
    this.#point = point;

    const prevTripEventItemComponent = this.#tripEventItemComponent;
    const prevEditEventComponent = this.#editEventComponent;

    this.#tripEventItemComponent = new TripEventItemView(this.#point, this.#offerModel, this.#destinationModel);
    this.#editEventComponent = new EditEventView(this.#point, this.#offerModel, this.#destinationModel);

    this.#tripEventItemComponent.setFavoriteClickHandler(this.#handleFavoriteClick);

    this.#tripEventItemComponent.setClickHandler(() => {
      this.#replaceItemToForm();
      document.addEventListener('keydown', this.#onEscKeyDown);
    });

    this.#editEventComponent.setFormSubmitHandler(() => {
      this.#replaceFormToItem();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    });

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

  #replaceItemToForm = () => {
    replace(this.#editEventComponent, this.#tripEventItemComponent);
  };

  #replaceFormToItem = () => {
    replace(this.#tripEventItemComponent, this.#editEventComponent);
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
};
