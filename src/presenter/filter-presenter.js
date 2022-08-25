import { render, RenderPosition } from '../framework/render.js';
import FiltersView from '../view/filters-view.js';

export default class FilterPresenter {
  #container;

  constructor(container) {
    this.#container = container;
  }

  init = () => {
    render(new FiltersView(), this.#container, RenderPosition.AFTERBEGIN);
  };
}
