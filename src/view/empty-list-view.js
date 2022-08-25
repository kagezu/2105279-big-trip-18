import AbstractView from '../framework/view/abstract-view.js';
import { filterToMessage } from '../const.js';

const createTemplate = (filter = 'all') => `<p class="trip-events__msg">${filterToMessage[filter]}</p>`;

export default class EmptyListView extends AbstractView {

  get template() {
    return createTemplate();
  }
}
