import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { formatStringToDate } from '../utils/time.js';
import { transformFirstCharToUpperCase } from '../utils/common.js';
import { OFFERS_TYPE } from '../const.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const createTypeIcon = (type) => `
  <label class="event__type  event__type-btn" for="event-type-toggle-1">
    <span class="visually-hidden">Choose event type</span>
    <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
  </label>
  <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">`;
const createTypeItem = (type, isChecked) => `
  <div class="event__type-item">
    <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio"
    name="event-type" value="${type}"
    ${isChecked ? ' checked' : ''}>
      <label class="event__type-label  event__type-label--${type}"
      for="event-type-${type}-1">${transformFirstCharToUpperCase(type)}</label>
  </div>`;
const createTypeList = (type) => {
  const checkboxList = OFFERS_TYPE
    .map((currentType) => createTypeItem(currentType, currentType === type))
    .join('');
  return `
  <div class="event__type-list">
    <fieldset class="event__type-group">
      <legend class="visually-hidden">Event type</legend>
      ${checkboxList}
    </fieldset>
  </div>`;
};
const createDestinationList = (destination, destinationModel) => {
  const destinationList = destinationModel
    .get()
    .map(({ name }) => `<option value="${name}"></option>`)
    .join('');
  return `
    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination"
    value="${destinationModel.get(destination).name}" list="destination-list-1">
      <datalist id="destination-list-1">
        ${destinationList};
      </datalist>`;
};
const createEventOffer = ({ id, title, price }, isChecked) => `
  <div class="event__offer-selector">
     <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}" type="checkbox" name="event-offer-${id}"
     ${isChecked ? ' checked' : ''}>
       <label class="event__offer-label" for="event-offer-${id}">
         <span class="event__offer-title">${title}</span>
         &plus;&euro;&nbsp;
         <span class="event__offer-price">${price}</span>
       </label>
   </div>`;
const createEventOfferList = (offers, offerList) => {
  const eventOfferList = offerList.offers
    .map((offer) => createEventOffer(offer, offers.some((id) => id === offer.id)))
    .join('');
  return `
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${eventOfferList}
      </div>
    </section>`;
};
const createEventPhoto = ({ src, description }) => `<img class="event__photo" src="${src}" alt="${description}">`;
const createEventPhotoList = ({ pictures }) => {
  const photoList = pictures ? pictures
    .map(createEventPhoto)
    .join('') : '';
  return `
    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${photoList}
      </div>
    </div>`;
};

const createTemplate = ({ basePrice, dateFrom, dateTo, offers, type, destination }, offerModel, destinationModel) => `
  <li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
        ${createTypeIcon(type)}
        ${createTypeList(type)}
        </div>
        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
           ${transformFirstCharToUpperCase(type)}
          </label>
          ${createDestinationList(destination, destinationModel)}
        </div>
        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${formatStringToDate(dateFrom)}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${formatStringToDate(dateTo)}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        ${createEventOfferList(offers, offerModel.get(type))}

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${destinationModel.get(destination).description}</p>
          ${createEventPhotoList(destinationModel.get(destination))}
        </section>
      </section>
    </form>
  </li>`;

export default class EditEventView extends AbstractStatefulView {
  #offerModel;
  #destinationModel;
  #datepicker = null;

  // ??????????????????????

  constructor(point, offerModel, destinationModel) {
    super();
    this._state = EditEventView.parseStateToPoint(point);
    this.#offerModel = offerModel;
    this.#destinationModel = destinationModel;
    this._restoreHandlers();
  }

  // ??????????????

  get template() {
    return createTemplate(this._state, this.#offerModel, this.#destinationModel);
  }

  // ?????????????????????????? ????????????

  removeElement = () => {
    super.removeElement();
    if (this.#datepicker) {
      this.#datepicker.destroy();
      this.#datepicker = null;
    }
  };

  _restoreHandlers = () => {
    [...this.element.querySelectorAll('.event__type-input')]
      .forEach((element) => element.addEventListener('change', this.#handlePointTypeChange));
    this.element.querySelector('form').addEventListener('submit', this.#handleFormSubmit);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#handleFormSubmit);
  };

  // ?????????????????? ????????????

  setFormSubmitHandler = (callback) => {
    this._callback.formSubmit = callback;
    this.element.querySelector('form').addEventListener('submit', this.#handleFormSubmit);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#handleFormSubmit);
  };

  /*
    setPointTypeChangeHandler = (callback) => {
      this._callback.typeChange = callback;
    };
  */

  // ?????????????????? ????????????


  #dueDateChangeHandler = ([userDate]) => {
    this.updateElement({
      dueDate: userDate,
    });
  };

  #setDatepicker = () => {
    if (this._state.isDueDate) {
      // flatpickr ???????? ?????????? ???????????????????????????????? ???????????? ?? ????????????,
      // ???????? ???????? ???????????? ???????? ???????????????? ?????? ????????????????????
      this.#datepicker = flatpickr(
        this.element.querySelector('.card__date'),
        {
          dateFormat: 'j F',
          defaultDate: this._state.dueDate,
          onChange: this.#dueDateChangeHandler, // ???? ?????????????? flatpickr ???????????????? ?????? ????????????
        },
      );
    }
  };


  // ?????????????????????? ??????????????

  #handleFormSubmit = (evt) => {
    evt.preventDefault();
    this._callback.formSubmit();
  };

  #handlePointTypeChange = (evt) => {
    evt.preventDefault();
    this.updateElement({
      type: evt.target.value,
      offers: []
    });
  };

  // ?????????????????????? ????????????

  static parsePointToState = (point) => ({
    ...point,
  });

  static parseStateToPoint = (state) => {
    const point = { ...state };
    return point;
  };

}
