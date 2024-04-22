import cn from "classnames";
import React, { FC, useEffect, useState } from "react";

import { DAYS } from "@/constants/days";
import { ChevronLeft } from "@/icons/ChevronLeft";

import { StyledCalendar } from "./styled";
import { getDaysInMonth } from "./utils/getDaysInMonth";

const DateCell = ({ date, onClick }: any) => {
  return (
    <td
      className={cn({
        "calendar-day__inactive": date <= new Date(),
      })}
      onClick={() => date && onClick(date)}
    >
      {date && date.getDate()}
    </td>
  );
};

const WeekRow = ({ dates, selectedDate, chosenDate, onClick }: any) => (
  <tr>
    {dates.map((date: any, index: any) => (
      <DateCell key={index} date={date} selectedDate={selectedDate} chosenDate={chosenDate} onClick={onClick} />
    ))}
  </tr>
);

interface Props {
  className: string;
  selectedDate: Date;
  handleDateSelect: (date: Date) => void;
}

export const Calendar: FC<Props> = ({ selectedDate, handleDateSelect, className }) => {
  const [chosenDate, setChosenDate] = useState<any>(null);

  useEffect(() => {
    const storedDate = localStorage.getItem("chosenDate");
    if (storedDate) {
      setChosenDate(new Date(storedDate));
    }
  }, []);

  const changeDate = (change: number) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + change);
    handleDateSelect(newDate);

    localStorage.setItem("chosenDate", newDate.toISOString());
  };

  const selectDate = (date: any) => {
    if (date <= new Date()) return;
    handleDateSelect(date);
    setChosenDate(date);

    localStorage.setItem("chosenDate", date.toISOString());
  };

  const days = getDaysInMonth(selectedDate);

  const weeks = Array.from({ length: Math.ceil(days.length / 7) });

  return (
    <StyledCalendar className={className}>
      <div className="calendar-head">
        <span>Select dates</span>

        <div className="calendar-head__controls">
          <button type="button" onClick={() => changeDate(-1)}>
            <ChevronLeft />
          </button>

          <span>
            {selectedDate.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </span>

          <button type="button" onClick={() => changeDate(1)}>
            <ChevronLeft />
          </button>
        </div>
      </div>

      <div className="calendar-days">
        {DAYS.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>

      <table>
        <tbody>
          {weeks.map((_, weekIndex) => (
            <WeekRow
              key={weekIndex}
              dates={days.slice(weekIndex * 7, (weekIndex + 1) * 7)}
              selectedDate={selectedDate}
              chosenDate={chosenDate}
              onClick={selectDate}
            />
          ))}
        </tbody>
      </table>
    </StyledCalendar>
  );
};
