import { useState, useRef } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { defaultProps, curDate, options, mockHappyDays, dateRange } from './scripts/consts';
import { getYear, getMonth } from './scripts/utils';

import * as calendar from './scripts/calendarData';

import './DatePicker.css';

export const DatePicker = () => {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  // const [openHint, setOpenHint] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const MonthSelectRef = useRef(null);
  const YearSelectRef = useRef(null);
  const mouseEnter = useRef(null);

  const monthData = calendar.getMonthData(date.getFullYear(), date.getMonth());

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
    const year = YearSelectRef.current.value;
    const month = MonthSelectRef.current.value;
    const date = new Date(year, month);

    setDate(date);
  };

  const isDayDisabled = (date) => {
    if (date.getTime() >= dateRange.dateFrom.getTime() && date.getTime() <= dateRange.dateTo.getTime()) {
      return false;
    } else {
      return true;
    }
  };

  const handleShowHint = (e, date) => {
    if (isDayHappy(date)) {
      e.target.insertAdjacentHTML('beforeend', `<div class="hint">${textByDate(date)}</div>`);
    }
  };

  const handleHideHint = (e, date) => {
    if (isDayHappy(date)) {
      e.target.removeChild(e.target.lastChild);
    }
  };

  const isDayHappy = (date) => {
    return mockHappyDays.some(
      (obj) => obj.dateFrom.getTime() <= date.getTime() && obj.dateTo.getTime() >= date.getTime(),
    );
  };

  const textByDate = (date) => {
    const res = mockHappyDays.find(
      (obj) => obj.dateFrom.getTime() <= date.getTime() && obj.dateTo.getTime() >= date.getTime(),
    );

    return res.label;
  };

  return (
    <div className="wrapper">
      <Input variant="filled" value={value} onClick={handleInputClick} />
      {open && (
        <div className="calendar">
          <div className="header">
            <Button onClick={handlePrevMonth} content="<" size="s" color="secondary" variant="outlined" />
            <select className="months" onChange={handleSelectChange} ref={MonthSelectRef} value={date.getMonth()}>
              {defaultProps.months.map((month, index) => (
                <option key={month} value={index}>
                  {month}
                </option>
              ))}
            </select>
            <select className="years" ref={YearSelectRef} onChange={handleSelectChange} value={date.getFullYear()}>
              {defaultProps.years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <Button onClick={handleNextMonth} content=">" size="s" color="secondary" variant="outlined" />
          </div>
          <div className="days">
            <table>
              <thead>
                <tr>
                  {defaultProps.weekNames.map((day) => (
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
                        <td
                          onMouseEnter={(e) => handleShowHint(e, date)}
                          onMouseOut={(e) => handleHideHint(e, date)}
                          key={index}
                          onClick={() => handleSelectDay(date)}
                          className={`day ${calendar.isCurrentDay(date, curDate) && 'currentDay'} ${
                            calendar.isCurrentDay(date, selectedDate) && 'selectedDay'
                          } ${isDayDisabled(date) && 'disabled'} ${isDayHappy(date) && 'holiday'}`}
                          ref={calendar.isCurrentDay(date, selectedDate) ? mouseEnter : null}
                        >
                          {date.getDate()}
                        </td>
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
