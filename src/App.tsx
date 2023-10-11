import { useState } from "react";
import { Form } from "./components/Form/Form.component";
import { Header } from "./components/Header/header.component";
import { Tasks } from "./components/Tasks/Tasks.component";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: "teste",
      title: "opa",
      isCompleted: true,
    },
    {
      id: "teste2",
      title: "opa123",
      isCompleted: false,
    },
  ]);

  function addTask(taskTitle: string) {
    setTasks([
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
    setTasks(newTasks);
  }

  return (
    <>
      <Header />
      <Form addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}
