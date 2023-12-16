import { useState, useRef, useMemo } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { options, dateRange, DefaultMonths, DefaultYears, DefaultWeekNames } from './scripts/consts';
import { getYear, getMonth, getInitialDate, getMonthsArr } from './scripts/utils';
import { Day } from './components/Day';

import * as calendar from './scripts/calendarData';

import './DatePicker.css';

export const DatePicker = () => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(getInitialDate(dateRange.dateFrom));
  const [selectedDate, setSelectedDate] = useState(null);

  const MonthSelectRef = useRef(null);
  const YearSelectRef = useRef(null);

  const yearFrom = dateRange.dateFrom.getFullYear();
  const yearTo = dateRange.dateTo.getFullYear();
  const monthFrom = dateRange.dateFrom.getMonth();
  const monthTo = dateRange.dateTo.getMonth();
  const currentYear = date.getFullYear();

  const switchToPrevMonthDisabled = useMemo(() => {
    return date.getFullYear() === yearFrom && date.getMonth() === monthFrom;
  }, [date, dateRange]);

  const switchToNextMonthDisabled = useMemo(() => {
    return date.getFullYear() === yearTo && date.getMonth() === monthTo;
  }, [date, dateRange]);

  const monthData = calendar.getMonthData(date.getFullYear(), date.getMonth());

  const years = useMemo(() => {
    if (!dateRange) {
      return DefaultYears;
    }

    let res = [];

    for (let i = yearFrom; i <= yearTo; i++) {
      res.push(i);
    }

    return res;
  }, [date, dateRange]);

  const months = useMemo(() => {
    if (!dateRange) {
      return DefaultMonths;
    }

    if (yearFrom < currentYear && currentYear < yearTo) {
      return DefaultMonths;
    }

    if (currentYear > yearFrom && yearTo === currentYear) {
      return getMonthsArr(0, monthTo);
    }

    if (currentYear === yearTo) {
      return getMonthsArr(monthFrom, monthTo);
    }

    if (currentYear < yearTo) {
      return getMonthsArr(monthFrom, 11);
    }
  }, [dateRange, date]);

  const handleInputClick = () => {
    setOpen(true);
  };

  const handlePrevMonth = () => {
    const data = new Date(getYear(date), getMonth(date) - 1);

    setDate(data);
  };

  const handleNextMonth = () => {
    const data = new Date(getYear(date), getMonth(date) + 1);

    setDate(data);
  };

  const handleSelectDay = (date) => {
    setValue(date.toLocaleDateString('en-US', options));
    setSelectedDate(date);
    setOpen(false);
  };

  const handleSelectChange = () => {
    let year = Number(YearSelectRef.current.value);
    let month = Number(MonthSelectRef.current.value);

    if (year < yearFrom || (year === yearFrom && month < monthFrom)) {
      year = yearFrom;
      month = monthFrom;
    }

    if (year > yearTo || (year === yearTo && month > monthTo)) {
      year = yearTo;
      month = monthTo;
    }

    setDate(new Date(year, month));
  };

  return (
    <div className="wrapper">
      <Input variant="filled" value={value} onClick={handleInputClick} />
      {open && (
        <div className="calendar">
          <div className="header">
            <Button
              onClick={handlePrevMonth}
              content="<"
              size="s"
              color="secondary"
              variant="outlined"
              disabled={switchToPrevMonthDisabled}
            />
            <select className="months" onChange={handleSelectChange} ref={MonthSelectRef} value={date.getMonth()}>
              {months.map((month) => (
                <option key={month} value={DefaultMonths.indexOf(month)}>
                  {month}
                </option>
              ))}
            </select>
            <select className="years" ref={YearSelectRef} onChange={handleSelectChange} value={date.getFullYear()}>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <Button
              onClick={handleNextMonth}
              content=">"
              size="s"
              color="secondary"
              variant="outlined"
              disabled={switchToNextMonthDisabled}
            />
          </div>
          <div className="days">
            <table>
              <thead>
                <tr>
                  {DefaultWeekNames.map((day) => (
                    <th key={day} className="size">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {monthData.map((week, index) => (
                  <tr key={index} className="week">
                    {week.map((date, index) =>
                      date ? (
                        <Day
                          key={date.getTime()}
                          date={date}
                          onSelectDay={handleSelectDay}
                          className={calendar.isCurrentDay(date, selectedDate) && 'selectedDay'}
                        />
                      ) : (
                        <td key={index} />
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
