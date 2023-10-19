import { useEffect, useState } from "react";
import { Form } from "./components/Form/Form.component";
import { Header } from "./components/Header/header.component";
import { Tasks } from "./components/Tasks/Tasks.component";

const LOCAL_STORAGE_KEY = "todo-list-view:savedTasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function LoadOnLocalStorage() {
    const dbStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (dbStorage) {
      setTasks(JSON.parse(dbStorage));
    }
  }

  useEffect(() => {
    LoadOnLocalStorage();
  }, []);

  function SaveOnLocalStorage(newTasks: ITask[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle: string) {
    SaveOnLocalStorage([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    SaveOnLocalStorage(newTasks);
  }

  function handleClickTaskCompleted(taskId: string) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    SaveOnLocalStorage(newTask);
  }

  return (
    <>
      <Header />
      <Form addTask={addTask} />
      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        onComplete={handleClickTaskCompleted}
      />
    </>
  );
}
