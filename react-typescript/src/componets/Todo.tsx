import React from "react";

import { TaskLisk } from "./TaskList";

const inistialTask = ["歯磨き", "犬の散歩", "勉強"];

export const Todo = () => {
  return (
    <div>
      <h1>ToDo App</h1>
      <TaskLisk items={inistialTask} />
    </div>
  );
};
