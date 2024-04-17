import { FC, useState } from "react";

interface Props {}

export const Filter: FC<Props> = () => {
  const [name, setName] = useState("");

  const handleChange = (e: any) => {
    setName(e.target.value);
  };
  return (
    <form>
      <input value={name} onChange={handleChange} placeholder="Search" />
    </form>
  );
};
