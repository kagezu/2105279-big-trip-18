import { render, RenderPosition } from '../framework/render.js';
import FiltersView from '../view/filters-view.js';

export default class FilterPresenter {
  #container;
  #filters;

  constructor(container, filters) {
    this.#container = container;
    this.#filters = filters;
  }

  init = () => {
    render(new FiltersView(this.#filters), this.#container, RenderPosition.AFTERBEGIN);
  };
}
