export const curDate = new Date();
export const arrDaysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const mockHappyDays = [
  { dateFrom: new Date(2024, 0, 1), dateTo: new Date(2024, 0, 9), label: 'New Year' },
  { dateFrom: new Date(2023, 11, 15), dateTo: new Date(2023, 11, 16), label: 'RFL' },
];

export const dateRange = { dateFrom: new Date(2023, 9, 12), dateTo: new Date(2024, 2, 15) };

export const DefaultMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const DefaultWeekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const DefaultYears = new Array(100).fill(0).map((_, index) => index + 1950);
