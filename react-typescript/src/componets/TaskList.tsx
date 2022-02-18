import React from "react";

type Props = {
  items: string[];
};

export const TaskLisk: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};
