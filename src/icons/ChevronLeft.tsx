import { FC } from "react";

interface Props {
  className?: string;
}

const ChevronLeft: FC<Props> = ({ className }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.54638 1.72473L10.6953 2.84969L5.98907 7.45774L10.6953 12.0658L9.54638 13.1908L3.69121 7.45774L9.54638 1.72473Z"
        fill="#2B2B2B"
      />
    </svg>
  );
};

export { ChevronLeft };
