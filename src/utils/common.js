/*
*Преобразование первый символ в заглавный
*/
export const transformFirstCharToUpperCase = (str) => str ? `${str[0].toUpperCase()}${str.slice(1)}` : str;
