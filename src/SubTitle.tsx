import { FC, useState } from "react";
import "./styles/SubTitle.css";

interface SubTitleProps {
  onClick(token: string): Promise<void>;
}

export const SubTitle: FC<SubTitleProps> = ({ onClick }) => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="subTitle">
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => onClick(value)}>get repo data</button>
    </div>
  );
};
