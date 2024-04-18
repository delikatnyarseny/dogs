import React, { useEffect, useState } from "react";
import { StyledCalendar } from "./styled";
import cn from "classnames";
import { DAYS } from "@/constants/days";

const getDaysInMonth = (selectedDate: any) => {
  const days = [];
  const firstDayOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  );
  const lastDayOfPrevMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    0
  );
  const lastDayOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  );
  const daysInMonth = lastDayOfMonth.getDate();

  const startDayOfWeek = firstDayOfMonth.getDay();
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const prevDate = new Date(lastDayOfPrevMonth);
    prevDate.setDate(prevDate.getDate() - i);
    days.push(prevDate);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      i
    );
    days.push(currentDate);
  }

  return days;
};

const DateCell = ({ date, selectedDate, chosenDate, onClick }: any) => {
  const isActive =
    date &&
    date.getMonth() === selectedDate.getMonth() &&
    date > new Date() &&
    !(date < chosenDate || date >= chosenDate);

  return (
    <td
      className={cn("day-cell", {
        active: isActive,
        inactive: !date,
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
      <DateCell
        key={index}
        date={date}
        selectedDate={selectedDate}
        chosenDate={chosenDate}
        onClick={onClick}
      />
    ))}
  </tr>
);

export const Calendar = ({ onDateSelect }: any) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [chosenDate, setChosenDate] = useState<any>(null);

  useEffect(() => {
    const storedDate = localStorage.getItem("chosenDate");
    if (storedDate) {
      setChosenDate(new Date(storedDate));
    }
  }, []);

  const changeDate = (change: any) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + change);
    setSelectedDate(newDate);
    localStorage.setItem("chosenDate", newDate.toISOString());
  };

  const selectDate = (date: any) => {
    if (date <= new Date()) return;
    setSelectedDate(date);
    setChosenDate(date);
    onDateSelect(date);
    localStorage.setItem("chosenDate", date.toISOString());
  };

  const days = getDaysInMonth(selectedDate);
  const weeks = Array.from({ length: Math.ceil(days.length / 7) });

  return (
    <StyledCalendar>
      <div className="header">
        <p>Select dates</p>
        <button onClick={() => changeDate(-1)}>{"<"}</button>
        <span className="month">
          {selectedDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button onClick={() => changeDate(1)}>{">"}</button>
      </div>
      <div className="day-names">
        {DAYS.map((day, index) => (
          <div key={index} className="day-cell">
            {day}
          </div>
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
