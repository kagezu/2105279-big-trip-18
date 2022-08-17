import { render, RenderPosition } from '../render.js';
import TripInfoView from '../view/trip-info-view.js';

export default class InfoPresenter {

  init = (container) => {
    this.container = container;
    render(new TripInfoView(), this.container, RenderPosition.AFTERBEGIN);
  };
}
