import { arrDaysInMonths } from './consts';
import { isLeapYear } from './utils';

const daysInMonths = (date) => {
  const month = date.getMonth();
  const year = date.getFullYear();

  let days = arrDaysInMonths[month];

  if (isLeapYear(year) && month === 1) {
    days += 1;
  }

  return days;
};

export const isCurrentDay = (currentDay, day) => {
  if (!currentDay || !day) return false;

  if (
    currentDay.getFullYear() === day.getFullYear() &&
    currentDay.getMonth() === day.getMonth() &&
    currentDay.getDate() === day.getDate()
  ) {
    return true;
  } else {
    return false;
  }
};

export const getMonthData = (year, month) => {
  const res = [];
  const date = new Date(year, month);
  const daysInCurrentMonth = daysInMonths(date);
  const daysInWeek = 7;
  const monthStartsOn = date.getDay();

  let day = 1;

  for (let i = 0; i < (daysInCurrentMonth + monthStartsOn) / daysInWeek; i++) {
    res[i] = [];
    for (let j = 0; j < daysInWeek; j++) {
      if ((i === 0 && j < monthStartsOn) || day > daysInCurrentMonth) {
        res[i][j] = undefined;
      } else {
        res[i][j] = new Date(year, month, day++);
      }
    }
  }
  return res;
};
