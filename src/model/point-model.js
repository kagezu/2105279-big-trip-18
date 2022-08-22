import { POINTS } from '../mock/generation.js';

export default class PointModel {
  #points = POINTS;

  get = () => this.#points;
}
