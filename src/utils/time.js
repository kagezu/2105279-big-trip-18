import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

/**
 *Преобразует в формат YYYY
 */
const formatStringToYear = (date) => dayjs(date).format('YYYY');

/**
 *Преобразует в формат YY/MM/DD hh:mm
 */
const formatStringToDate = (date) => dayjs(date).format('YY/MM/DD hh:mm');

/**
 *Преобразует в формат MMMM DD
 */
const formatStringToShortDate = (date) => dayjs(date).format('MMMM DD');

/**
 *Преобразует в формат YYYY-MM-DD[T]hh:mm
 */
const formatStringToDateWithTime = (date) => dayjs(date).format('YYYY-MM-DD[T]hh:mm');

/**
 *Преобразует в формат hh:mm
 */
const formatStringToTime = (date) => dayjs(date).format('hh:mm');

/**
 *Преобразует разницу в часы и минуты H[H] mm[M]
 */
const formatDurationToTime = (dateFrom, dateTo) =>
  dayjs.duration(
    dayjs(dateTo)
      .diff(dayjs(dateFrom)))
    .format('H[H] mm[M]');

/**
 *Преобразует  длительность в минутах, в часы и минуты
 */
const formatMinutesToTime = (minutes) => dayjs.duration(minutes, 'minutes').format('H[h] mm[m]');

/**
 *Определяет прошла ли указанная дата
 */
const isPastDate = (date) => !dayjs(date).isAfter(dayjs(), 'D');

/**
 *Определяет не прошла ли указанная дата
 */
const isFutureDate = (date) => !dayjs(date).isBefore(dayjs(), 'D');

export {
  formatStringToYear,
  formatStringToDate,
  formatStringToDateWithTime,
  formatMinutesToTime,
  formatStringToShortDate,
  formatStringToTime,
  formatDurationToTime,
  isPastDate,
  isFutureDate
};
