export const getYear = (date) => {
  return date.getFullYear();
};

export const getMonth = (date) => {
  return date.getMonth();
};

export function isLeapYear(year) {
  return !(year % 4 || (!(year % 100) && year % 400));
}
