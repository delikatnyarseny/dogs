import { FC } from "react";

import { DateCell } from "../DateCell";

interface Props {
  dates: Date[];
  choosenDate: Date;
  onClick: (date: Date) => void;
}

const WeekRow: FC<Props> = ({ dates, choosenDate, onClick }) => {
  return (
    <tr>
      {dates.map((date, index) => (
        <DateCell key={index} cellDate={date} choosenDate={choosenDate} onClick={onClick} />
      ))}
    </tr>
  );
};

export { WeekRow };
