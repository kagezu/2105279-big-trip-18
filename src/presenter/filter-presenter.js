import { render, RenderPosition } from '../framework/render.js';
import FiltersView from '../view/filters-view.js';

export default class FilterPresenter {
  #container;
  init = (container) => {
    this.#container = container;
    render(new FiltersView(), this.#container, RenderPosition.AFTERBEGIN);
  };
}
