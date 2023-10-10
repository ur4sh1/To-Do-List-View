import logo from "../../assets/Logo.svg";
import styles from "../modules/Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} />
    </header>
  );
}
