import { render, RenderPosition } from '../framework/render.js';
import TripInfoView from '../view/trip-info-view.js';

export default class InfoPresenter {
  #container;

  constructor(container) {
    this.#container = container;
  }

  init = () => {
    render(new TripInfoView(), this.#container, RenderPosition.AFTERBEGIN);
  };
}
