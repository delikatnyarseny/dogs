import { FC, memo, useState } from "react";

import { Calendar } from "./components/Calendar";
import { TimeSlot } from "./components/TimeSlot";
import { StyledBookingCalendar } from "./styled";

interface Props {
  className: string;
  handleFormDateChange: (value: string) => void;
}

const BookingCalendar: FC<Props> = memo(({ className, handleFormDateChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <StyledBookingCalendar className={className}>
      <TimeSlot selectedDate={selectedDate} handleFormDateChange={handleFormDateChange} />

      <Calendar
        className="booking-calendar__calendar-widget"
        handleDateSelect={handleDateSelect}
        selectedDate={selectedDate}
      />
    </StyledBookingCalendar>
  );
});

export { BookingCalendar };
