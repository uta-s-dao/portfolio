import styles from "./components.module.css";
import Book from "../book/page";

export default function DesktopWorksPage() {
  return (
    <>
      <div className={styles.desktopOnly}>
        <Book />
      </div>
      ;
    </>
  );
}
