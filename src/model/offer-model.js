import { OFFERS } from '../mock/generation.js';

export default class OfferModel {
  #offers = OFFERS;

  get = (type = null, id = null) => {
    let result = this.#offers;
    if (type !== null) {
      result = this.#offers.find((offer) => offer.type === type);
      if (id !== null) {
        result = result.offers.find((offers) => offers.id === id);
        result.type = type;
      }
    }
    return result;
  };
}
