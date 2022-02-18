import React from "react";

type Props = {
  name: string;
  times?: number;
};

export const Greets: React.FC<Props> = (props) => {
  const { name, times = 1, children } = props;

  return (
    <>
      {[...Array(times)].map((_) => (
        <p>
          Hello, {name}! {children}
        </p>
      ))}
    </>
  );
};
