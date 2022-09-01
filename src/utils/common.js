/*
*Преобразование первый символ в заглавный
*/
export const transformFirstCharToUpperCase = (str) => str ? `${str[0].toUpperCase()}${str.slice(1)}` : str;


/*
*Заменяет элемент в массиве на обновлённый
*/
export const updatePoint = (points, update) => {
  const index = points.findIndex((point) => point.id === update.id);

  if (index === -1) {
    return points;
  }

  return [
    ...points.slice(0, index),
    update,
    ...points.slice(index + 1),
  ];
};
