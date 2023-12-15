import { DefaultMonths } from './consts';

export const getYear = (date) => {
  return date.getFullYear();
};

export const getMonth = (date) => {
  return date.getMonth();
};

export function isLeapYear(year) {
  return !(year % 4 || (!(year % 100) && year % 400));
}

export const getMonthsArr = (from, to) => {
  let res = [];

  for (let i = from; i <= to; i++) {
    res.push(DefaultMonths[i]);
  }
  return res;
};

export const getInitialDate = (dateFrom) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const yearFrom = dateFrom.getFullYear();
  const currentMonth = currentDate.getMonth();
  const monthFrom = dateFrom.getMonth();

  if (currentYear < yearFrom || (currentYear === yearFrom && currentMonth < monthFrom)) {
    return dateFrom;
  }

  return currentDate;
};
