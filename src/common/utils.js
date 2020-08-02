import { ASCII_ENTER_KEY, REGEX_GET_NONDIGITS } from './constants';

export const stripNonDigit = (value) => {
  if (typeof value === 'number' && !isNaN(value)) return value;
  return value.toString().replace(REGEX_GET_NONDIGITS, '');
};

export const isEnterKey = (e) => {
  const key = e.which || e.keyCode;
  if (key === ASCII_ENTER_KEY) {
    return true;
  }
  return false;
};

export const isValidFunction = (fn) => fn && typeof fn === 'function';
