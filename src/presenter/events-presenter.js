import { render } from '../framework/render.js';
import TripEventsView from '../view/trip-events-view.js';
import TripEventListView from '../view/trip-event-list-view.js';
import TripEventItemView from '../view/trip-event-item-view.js';
// import NewEventView from '../view/new-event-view.js';
import EditEventView from '../view/edit-event-view.js';

export default class EventsPresenter {
  #eventsContainer = new TripEventListView();
  #container;
  #points;
  #offerModel;
  #destinationModel;

  init = (container, points, offersModel, destinationModel) => {
    this.#container = container;
    this.#points = points;
    this.#offerModel = offersModel;
    this.#destinationModel = destinationModel;

    render(new TripEventsView(), this.#container);
    render(this.#eventsContainer, this.#container);

    render(new EditEventView(points[3], this.#offerModel, this.#destinationModel), this.#eventsContainer.element);

    points.forEach((point) => render(new TripEventItemView(point, this.#offerModel, this.#destinationModel), this.#eventsContainer.element));
  };
}

// render(new NewEventView(), this.#eventsContainer.element);
