import { generatePoint } from '../mock/generation.js';

export default class PointModel {
  points = Array.from({ length: 10 }, generatePoint);

  get = () => this.points;
}
