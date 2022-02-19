import React from "react";

export const Clock = ({ data }) => {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {data.toLocaleTimeString()}.</h2>
    </div>
  );
};
