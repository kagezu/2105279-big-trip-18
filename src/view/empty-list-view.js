import AbstractView from '../framework/view/abstract-view.js';
import { FilterType, filterTypeToMessage } from '../const.js';

const createTemplate = (filter = FilterType.EVERYTHING) => `<p class="trip-events__msg">${filterTypeToMessage[filter]}</p>`;

export default class EmptyListView extends AbstractView {

  get template() {
    return createTemplate();
  }
}
