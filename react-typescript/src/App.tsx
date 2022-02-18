import React, { useState } from "react";
import "./App.css";

import { Child } from "./componets/Child";
import { Counter } from "./componets/Counter";
import { Greets } from "./componets/Greets";
import { Items } from "./componets/Items";
import { Message } from "./componets/Message";
import { TaskInput } from "./componets/TaskInput";
import { TasksList } from "./componets/TasksList";
import { Todo } from "./componets/Todo";
import { Task } from "./Types";

const initialState: Task[] = [
  {
    id: 2,
    title: "次のTodo",
    done: false,
  },
  {
    id: 1,
    title: "次のTodo",
    done: true,
  },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <div className="App">
      <Counter />
      <Message />
      <Items />
      <Child>Hi! I'm Children </Child>
      <Greets name="うさぎ" times={2}>
        <span>🐰</span>
      </Greets>
      <Todo />
      <TaskInput />
      <TasksList tasks={tasks} />
    </div>
  );
};

export default App;
