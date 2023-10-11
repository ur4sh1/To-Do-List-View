import { ChangeEvent, FormEvent, useState } from "react";
import styles from "../modules/Form.module.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface Props {
  addTask: (taskTitle: string) => void;
}

export function Form({ addTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    addTask(title);
    setTitle("");
  }

  function changeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        placeholder="New Task"
        onChange={changeTitle}
        value={title}
      />
      <button className={styles.button}>
        Add
        <AiOutlinePlusCircle size={20} />
      </button>
    </form>
  );
}
