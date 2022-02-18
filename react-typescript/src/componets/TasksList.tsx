import { Task } from "../Types";
import { TaskItem } from "./TaskItem";

type Props = {
  tasks: Task[];
};

export const TasksList: React.FC<Props> = ({ tasks }) => {
  return (
    <div>
      {tasks.length <= 0 ? (
        "登録されたToDoはありません。"
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
};
