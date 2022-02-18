import React, { useState } from "react";

export const Message: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const inputMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <input type="text" value={message} onChange={inputMessage} />
    </div>
  );
};
