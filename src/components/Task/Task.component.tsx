import styles from "../modules/Task.module.scss";
import { TbTrash } from "react-icons/tb";
import { ITask } from "../../App";

interface Props {
  task: ITask;
  deleteTask: (taskId: string) => void;
}

export function Task({ task, deleteTask }: Props) {
  return (
    <div className={styles.task}>
      <button className={styles.check}>
        <div />
      </button>
      <p>{task.title}</p>
      <button className={styles.delet} onClick={() => deleteTask(task.id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
