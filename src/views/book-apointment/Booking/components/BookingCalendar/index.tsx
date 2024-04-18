import { FC, useState } from "react";
import { StyledBookingCalendar } from "./styled";
import { TimeSlot } from "./components/TimeSlot";
import { Calendar } from "./components/Calendar";

interface Props {}

export const BookingCalendar: FC<Props> = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  // REDUX + TS
  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    setSelectedTimeSlot("");
  };

  const handleTimeSlotSelect = (timeSlot: any) => {
    setSelectedTimeSlot(timeSlot);
  };

  return (
    <StyledBookingCalendar>
      <div>
        <TimeSlot
          selectedDate={selectedDate}
          onTimeSlotSelect={handleTimeSlotSelect}
        />

        <h3>Selected timeslot: {selectedTimeSlot}</h3>
      </div>

      <Calendar onDateSelect={handleDateChange} />
    </StyledBookingCalendar>
  );
};
