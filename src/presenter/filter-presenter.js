import { render, RenderPosition } from '../render.js';
import FiltersView from '../view/filters-view.js';

export default class FilterPresenter {

  init = (container) => {
    this.container = container;
    render(new FiltersView(), this.container, RenderPosition.AFTERBEGIN);
  };
}