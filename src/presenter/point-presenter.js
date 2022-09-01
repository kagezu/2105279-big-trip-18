import { render, replace } from '../framework/render.js';
import TripEventItemView from '../view/trip-event-item-view.js';
import EditEventView from '../view/edit-event-view.js';

export default class PointPresenter {
  #container;
  #point;
  #offerModel;
  #destinationModel;
  #tripEventItemComponent;
  #editEventComponent;

  constructor(container, offersModel, destinationModel) {
    this.#container = container;
    this.#offerModel = offersModel;
    this.#destinationModel = destinationModel;
  }

  init = (point) => {
    this.#point = point;

    this.#tripEventItemComponent = new TripEventItemView(this.#point, this.#offerModel, this.#destinationModel);
    this.#editEventComponent = new EditEventView(this.#point, this.#offerModel, this.#destinationModel);

    this.#tripEventItemComponent.setClickHandler(() => {
      this.#replaceItemToForm();
      document.addEventListener('keydown', this.#onEscKeyDown);
    });

    this.#editEventComponent.setFormSubmitHandler(() => {
      this.#replaceFormToItem();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    });

    render(this.#tripEventItemComponent, this.#container);
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
}
