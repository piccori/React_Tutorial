import React from "react";

type Item = {
  id: number;
  title: string;
};
export const Items: React.FC = () => {
  const items: Item[] = [
    {
      id: 1,
      title: "アイテム1",
    },
    {
      id: 2,
      title: "アイテム2",
    },
    {
      id: 3,
      title: "アイテム3",
    },
  ];

  return (
    <div className="App">
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
