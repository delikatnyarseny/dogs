export const getDaysInMonth = (selectedDate: Date) => {
  const days = [];
  const selectedDateYear = selectedDate.getFullYear();
  const selectedDateMonth = selectedDate.getMonth();

  const firstDayOfMonth = new Date(selectedDateYear, selectedDateMonth, 1);
  const lastDayOfPrevMonth = new Date(selectedDateYear, selectedDateMonth, 0);
  const lastDayOfMonth = new Date(selectedDateYear, selectedDateMonth + 1, 0);

  const daysInMonth = lastDayOfMonth.getDate();

  const startDayOfWeek = firstDayOfMonth.getDay();

  // add the last days of the last month, to fill in the blank spaces
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const prevDate = new Date(lastDayOfPrevMonth);
    prevDate.setDate(prevDate.getDate() - i);
    days.push(prevDate);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = new Date(selectedDateYear, selectedDateMonth, i);

    days.push(currentDate);
  }

  return days;
};
