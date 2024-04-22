const getFormattedDay = (date: Date) => {
  const day = date.getDate();
  const suffix = ["th", "st", "nd", "rd"];
  const suffixIndex = day % 10 > 0 && day % 10 < 4 && (day < 11 || day > 13) ? day % 10 : 0;
  return `${date.toLocaleString("en-US", { month: "short" })}. ${day}${suffix[suffixIndex]}, ${date.getFullYear()}`;
};

export { getFormattedDay };
