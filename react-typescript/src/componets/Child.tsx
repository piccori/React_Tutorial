import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Child: React.FC<Props> = ({ children }) => {
  return <h1>{children}</h1>;
};
