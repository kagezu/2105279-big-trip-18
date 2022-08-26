import { FilterType } from '../const.js';
import { isPastDate, isFutureDate } from './time.js';

const isPointFuture = (point) => isFutureDate(point.dateFrom);
const isPointPast = (point) => isPastDate(point.dateTo);

export const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter(isPointFuture),
  [FilterType.PAST]: (points) => points.filter(isPointPast)
};
