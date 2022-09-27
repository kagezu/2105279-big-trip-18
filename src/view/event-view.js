import AbstractView from '../framework/view/abstract-view.js';
import {
  formatStringToDate,
  formatStringToDateWithTime,
  formatStringToShortDate,
  formatStringToTime,
  formatDurationToTime
} from '../utils/time.js';
import { transformFirstCharToUpperCase } from '../utils/common.js';

const createTypeIcon = (type) => `
 <div class="event__type">
   <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
 </div>`;
const createDate = (dateFrom) => `<time class="event__date" datetime="${formatStringToDate(dateFrom)}">${formatStringToShortDate(dateFrom)}</time>`;
const createSchedule = (dateFrom, dateTo) => `
  <div class="event__schedule">
    <p class="event__time">
      <time class="event__start-time" datetime="${formatStringToDateWithTime(dateFrom)}">${formatStringToTime(dateFrom)}</time>
      &mdash;
      <time class="event__end-time" datetime="${formatStringToDateWithTime(dateTo)}">${formatStringToTime(dateTo)}</time>
    </p>
    <p class="event__duration">${formatDurationToTime(dateFrom, dateTo)}</p>
  </div>`;
const createPrice = (basePrice) => `
  <p class="event__price">
    &euro;&nbsp; <span class="event__price-value">${basePrice}</span>
  </p> `;
const createButtonFavorite = (isFavorite) => `
  <button class="event__favorite-btn ${isFavorite ? '  event__favorite-btn--active' : ''}" type="button">
    <span class="visually-hidden">Add to favorite</span>
    <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />
    </svg>
  </button>`;
const createOffer = ({ title, price }) => `
  <li class="event__offer">
    <span class="event__offer-title">${title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${price}</span>
  </li>`;
const createOfferList = (type, offers, offerModel) => offers.map((id) => createOffer(offerModel.get(type, id))).join('');

const createTemplate = ({ basePrice, dateFrom, dateTo, isFavorite, offers, type, destination }, offerModel, destinationModel) => `
  <li class="trip-events__item" >
    <div class="event">
      ${createDate(dateFrom)}
      ${createTypeIcon(type)}
      <h3 class="event__title">${transformFirstCharToUpperCase(type)} ${destinationModel.get(destination).name}</h3>
      ${createSchedule(dateFrom, dateTo)}
      ${createPrice(basePrice)}
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createOfferList(type, offers, offerModel)}
      </ul>
      ${createButtonFavorite(isFavorite)}
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li> `;

export default class EventView extends AbstractView {
  #point;
  #offerModel;
  #destinationModel;

  // Конструктор

  constructor(point, offerModel, destinationModel) {
    super();
    this.#point = point;
    this.#offerModel = offerModel;
    this.#destinationModel = destinationModel;
  }

  // Геттеры

  get template() {
    return createTemplate(this.#point, this.#offerModel, this.#destinationModel);
  }

  // Публичные методы

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#clickHandler);
  };

  setFavoriteClickHandler = (callback) => {
    this._callback.favoriteClick = callback;
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  };

  // Обработчики событий

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.favoriteClick();
  };
}
