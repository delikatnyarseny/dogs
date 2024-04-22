import { FC, useState } from "react";

import { StyledTimeSlot } from "./styled";
import { getAvailableTimeSlots } from "./utils/getAvailableTimeSlots";
import { getFormattedDay } from "./utils/getFormattedDay";

interface Props {
  selectedDate: Date;
  handleFormDateChange: (value: string) => void;
}

const TimeSlot: FC<Props> = ({ selectedDate, handleFormDateChange }) => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const isSaturday = selectedDate.getDay() === 6;
  const isSunday = selectedDate.getDay() === 0;

  const availableTimeSlots = isSaturday || isSunday ? getAvailableTimeSlots(11, 15) : getAvailableTimeSlots(11, 17);

  const handleSlotChange = (slot: string) => {
    setSelectedSlot(slot);
    handleFormDateChange(selectedDate + slot);
  };

  return (
    <StyledTimeSlot>
      <h2 className="timeslot-title">Choose a timeslot on {getFormattedDay(selectedDate)}</h2>

      <ul className="timeslot-slots">
        {availableTimeSlots.map((timeSlot, index) => (
          <li key={index}>
            <label className="timeslot-slots__slot">
              <input
                type="checkbox"
                id={`timeslot-${index}`}
                value={timeSlot}
                checked={timeSlot === selectedSlot}
                onChange={() => handleSlotChange(timeSlot)}
              />
              <span className="timeslot-slots__slot-value">{timeSlot}</span>
            </label>
          </li>
        ))}
      </ul>
    </StyledTimeSlot>
  );
};

export { TimeSlot };
