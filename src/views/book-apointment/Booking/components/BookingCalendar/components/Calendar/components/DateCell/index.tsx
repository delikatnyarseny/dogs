import cn from "classnames";
import { FC } from "react";

import { StyledDataCell } from "./styled";

interface Props {
  cellDate: Date;
  choosenDate: Date;
  onClick: (date: Date) => void;
}

const DateCell: FC<Props> = ({ cellDate, onClick, choosenDate }) => {
  return (
    <StyledDataCell
      onClick={() => cellDate && onClick(cellDate)}
      className={cn({
        "data-cell__inactive": cellDate <= new Date(),
        "data-cell__active": cellDate.getTime() === choosenDate.getTime(),
      })}
    >
      {cellDate.getDate()}
    </StyledDataCell>
  );
};

export { DateCell };
