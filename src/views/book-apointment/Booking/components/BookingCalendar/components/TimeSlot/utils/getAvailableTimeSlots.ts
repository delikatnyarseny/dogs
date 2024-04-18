export const getAvailableTimeSlots = (startHour: number, endHour: number) => {
  const availableTimeSlots = [];

  for (let i = startHour; i < endHour; i++) {
    const startTime = i % 12 === 0 ? 12 : i % 12;
    const endTime = (i + 1) % 12 === 0 ? 12 : (i + 1) % 12;

    const startPeriod = i < 12 ? "am" : "pm";
    const endPeriod = i + 1 < 12 ? "am" : "pm";

    availableTimeSlots.push(
      `${startTime} ${startPeriod} - ${endTime} ${endPeriod}`
    );
  }

  return availableTimeSlots;
};
