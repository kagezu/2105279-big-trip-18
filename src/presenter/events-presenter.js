import { render } from '../render.js';
import TripEventsView from '../view/trip-events-view.js';
import TripEventListView from '../view/trip-event-list-view.js';
import TripEventItemView from '../view/trip-event-item-view.js';
import NewEventView from '../view/new-event-view.js';
import EditEventView from '../view/edit-event-view.js';

export default class EventsPresenter {
  eventsContainer = new TripEventListView();

  init = (container) => {
    this.container = container;

    render(new TripEventsView(), this.container);
    render(this.eventsContainer, this.container);
    render(new NewEventView(), this.eventsContainer.getElement());
    render(new EditEventView(), this.eventsContainer.getElement());
    for (let i = 0; i < 3; i++) {
      render(new TripEventItemView(), this.eventsContainer.getElement());
    }
  };
}
