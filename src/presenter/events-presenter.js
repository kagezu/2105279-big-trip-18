import { render } from '../framework/render.js';
import TripEventsView from '../view/trip-events-view.js';
import TripEventListView from '../view/trip-event-list-view.js';
import TripEventItemView from '../view/trip-event-item-view.js';
// import NewEventView from '../view/new-event-view.js';
import EditEventView from '../view/edit-event-view.js';
import EmptyListView from '../view/empty-list-view.js';

export default class EventsPresenter {
  #eventsContainer = new TripEventListView();
  #container;
  #points;
  #offerModel;
  #destinationModel;

  constructor(container, points, offersModel, destinationModel) {
    this.#container = container;
    this.#points = points;
    this.#offerModel = offersModel;
    this.#destinationModel = destinationModel;
  }

  init = () => {
    if (!this.#points.length) {
      render(new EmptyListView(), this.#container);
      return;
    }

    render(new TripEventsView(), this.#container);
    render(this.#eventsContainer, this.#container);
    this.#points.forEach(this.#renderPoint);
  };

  #renderPoint = (point) => {
    const tripEventItemComponent = new TripEventItemView(point, this.#offerModel, this.#destinationModel);
    const editEventComponent = new EditEventView(point, this.#offerModel, this.#destinationModel);


    const replaceItemToForm = () => {
      this.#eventsContainer.element.replaceChild(editEventComponent.element, tripEventItemComponent.element);
    };

    const replaceFormToItem = () => {
      this.#eventsContainer.element.replaceChild(tripEventItemComponent.element, editEventComponent.element);
    };
    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToItem();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    tripEventItemComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceItemToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });

    editEventComponent.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToItem();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(tripEventItemComponent, this.#eventsContainer.element);
  };
}

// render(new NewEventView(), this.#eventsContainer.element);
