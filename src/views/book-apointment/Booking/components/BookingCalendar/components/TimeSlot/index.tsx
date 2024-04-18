export const TimeSlot = ({ selectedDate, onTimeSlotSelect }: any) => {
  const getAvailableTimeSlots = (date: any) => {
    const startHour = 9;
    const endHour = 17;
    const availableTimeSlots = [];

    for (let i = startHour; i < endHour; i++) {
      availableTimeSlots.push(`${i} am - ${i + 1} am`);
    }

    return availableTimeSlots;
  };

  const availableTimeSlots = getAvailableTimeSlots(selectedDate);

  const handleTimeSlotClick = (timeSlot: any) => {
    onTimeSlotSelect(timeSlot);
  };

  return (
    <div>
      <h2>Choose a timeslot on {selectedDate.toLocaleDateString()}</h2>

      {availableTimeSlots.map((timeSlot, index) => (
        <div key={index} onClick={() => handleTimeSlotClick(timeSlot)}>
          {timeSlot}
        </div>
      ))}
    </div>
  );
};
