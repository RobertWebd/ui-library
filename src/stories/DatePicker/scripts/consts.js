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

// только эти энэблэд, переключение на другие нельзя
export const dateRange = { dateFrom: new Date(2023, 11, 12), dateTo: new Date(2024, 1, 0) };

export const defaultProps = {
  // years: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  months: [
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
  ],
  weekNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  //next
  years: [],
};

//можно созадать фнкцию очищения дефолтных годов по нажатию и засунуть эту в функцию менять года по нажатия по кнопки
for (let i = dateRange.dateFrom.getFullYear(); i <= dateRange.dateTo.getFullYear(); i++) {
  defaultProps.years.push(`${i}`);
}
