import { FC, useState } from "react";

import { Calendar } from "./components/Calendar";
import { TimeSlot } from "./components/TimeSlot";
import { StyledBookingCalendar } from "./styled";

interface Props {}

const BookingCalendar: FC<Props> = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <StyledBookingCalendar>
      <TimeSlot selectedDate={selectedDate} />

      <Calendar
        onDateSelect={handleDateChange}
        className="booking-form__calendar"
      />
    </StyledBookingCalendar>
  );
};

export { BookingCalendar };
