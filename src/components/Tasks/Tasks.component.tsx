import { ITask } from "../../App";
import { Task } from "../Task/Task.component";
import styles from "../modules/Tasks.module.scss";

interface Props {
  tasks: ITask[];
  deleteTask: (taskId: string) => void;
}

export function Tasks({ tasks, deleteTask }: Props) {
  const tasksCount = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div>
          <p>Created tasks</p>
          <span>{tasksCount}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Completed</p>
          <span>
            {completedTasks} de {tasksCount}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </div>
    </section>
  );
}
