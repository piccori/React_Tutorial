import React, { useState } from "react";

import { Task } from "../Types";

export const TaskInput: React.FC = () => {
  const [inputTitle, setInputTitle] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };
  return (
    <div>
      <input type="text" value={inputTitle} onChange={handleInputChange} />
      <button>追加</button>
    </div>
  );
};
