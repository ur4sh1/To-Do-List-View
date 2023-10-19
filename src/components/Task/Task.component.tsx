import styles from "./Task.module.scss";
import { TbTrash } from "react-icons/tb";
import { ITask } from "../../App";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface Props {
  task: ITask;
  deleteTask: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, deleteTask, onComplete }: Props) {
  return (
    <div className={styles.task}>
      <button className={styles.check} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>
      <button className={styles.delet} onClick={() => deleteTask(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
