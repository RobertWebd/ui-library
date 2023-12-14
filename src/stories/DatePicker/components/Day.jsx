import React, { useState } from 'react';
import { curDate, dateRange, mockHappyDays } from '../scripts/consts';
import { isCurrentDay } from '../scripts/calendarData';

import './Day.css';

export const Day = ({ onSelectDay, date, className }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const isDayDisabled = (date) => {
    return !(date.getTime() >= dateRange.dateFrom.getTime() && date.getTime() <= dateRange.dateTo.getTime());
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

  const getClassName = () => {
    return `
      day
      ${isCurrentDay(date, curDate) && 'currentDay'}
      ${isDayDisabled(date) && 'disabled'} 
      ${isDayHappy(date) && 'holiday'}
      ${className}
    `;
  };

  return (
    <td
      onMouseEnter={() => setTooltipOpen(true)}
      onMouseOut={() => setTooltipOpen(false)}
      onClick={() => onSelectDay(date)}
      className={getClassName()}
    >
      {date.getDate()}
      {isDayHappy(date) && tooltipOpen && <div className="hint">{textByDate(date)}</div>}
    </td>
  );
};
