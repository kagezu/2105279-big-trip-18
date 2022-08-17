import { render } from '../render.js';
import TripEventsView from '../view/trip-events-view.js';
import TripEventListView from '../view/trip-event-list-view.js';
import TripEventItemView from '../view/trip-event-item-view.js';
import NewEventView from '../view/new-event-view.js';
import EditEventView from '../view/edit-event-view.js';

export default class EventsPresenter {
  eventsContainer = new TripEventListView();

  init = (container, points) => {
    this.container = container;
    this.points = points;

    render(new TripEventsView(), this.container);
    render(this.eventsContainer, this.container);
    render(new NewEventView(), this.eventsContainer.getElement());
    render(new EditEventView(), this.eventsContainer.getElement());
    points.forEach((point) => render(new TripEventItemView(point), this.eventsContainer.getElement()));
  };
}
