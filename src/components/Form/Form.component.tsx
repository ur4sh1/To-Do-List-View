import styles from "../modules/Form.module.scss";

export function Form() {
  return (
    <form className={styles.form}>
      <input className={styles.input} placeholder="New Task" />
      <button className={styles.button}>Add</button>
    </form>
  );
}
