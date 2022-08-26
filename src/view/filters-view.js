import AbstractView from '../framework/view/abstract-view.js';
import { transformFirstCharToUpperCase } from '../utils/common.js';

const createFilterRadio = (filter, isChecked) => `
  <div class="trip-filters__filter">
    <input id="filter-${filter.name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.name}"
    ${isChecked ? ' checked' : ''}
    ${filter.count === 0 ? ' disabled' : ''}>
      <label class="trip-filters__filter-label" for="filter-${filter.name}">${transformFirstCharToUpperCase(filter.name)}</label>
  </div>`;

const createTemplate = (filters) => {
  const filterRadioList = filters
    .map((filter, index) => createFilterRadio(filter, index === 0))
    .join('');
  return `
  <form class="trip-filters" action="#" method="get">
    ${filterRadioList}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;
};

export default class FiltersView extends AbstractView {
  #filters;

  constructor(filters) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createTemplate(this.#filters);
  }
}
