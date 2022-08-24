import { DESTINATION } from '../mock/generation.js';

export default class DestinationModel {
  #destination = DESTINATION;

  get = (id = null) => id === null ?
    this.#destination :
    this.#destination.find((destination) => destination.id === id);
}
