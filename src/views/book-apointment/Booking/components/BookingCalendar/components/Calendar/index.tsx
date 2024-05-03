import { FC, useState } from "react";

import { DAYS } from "@/constants/days";
import { ChevronLeft } from "@/icons/ChevronLeft";

import { WeekRow } from "./components/WeekRow";
import { StyledCalendar } from "./styled";
import { getDaysInMonth } from "./utils/getDaysInMonth";

interface Props {
  className: string;
  selectedDate: Date;
  handleDateSelect: (date: Date) => void;
}

export const Calendar: FC<Props> = ({ selectedDate, handleDateSelect, className }) => {
  const [localDate, setLocalDate] = useState<Date>(selectedDate);

  const changeMonth = (change: number) => {
    const newDate = new Date(localDate);
    newDate.setMonth(newDate.getMonth() + change);
    setLocalDate(newDate);
  };

  const selectDate = (date: Date) => {
    if (date <= new Date()) return;
    handleDateSelect(date);
    setLocalDate(date);
    localStorage.setItem("choosenDate", date.toISOString());
  };

  const days = getDaysInMonth(localDate);
  const weeks = Array.from({ length: Math.ceil(days.length / 7) });

  return (
    <StyledCalendar className={className}>
      <div className="calendar-head">
        <span>Select dates</span>

        <div className="calendar-head__controls">
          <button type="button" onClick={() => changeMonth(-1)} aria-label="Previous month">
            <ChevronLeft />
          </button>

          <span>
            {selectedDate.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </span>

          <button type="button" onClick={() => changeMonth(1)} aria-label="Next month">
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
              choosenDate={selectedDate}
              onClick={selectDate}
            />
          ))}
        </tbody>
      </table>
    </StyledCalendar>
  );
};
