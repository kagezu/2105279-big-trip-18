import { filter } from '../utils/filter.js';

export const generateFilter = (movies) => Object.entries(filter).map(
  ([filterName, filterPoints]) => ({
    name: filterName,
    count: filterPoints(movies).length,
  }),
);
