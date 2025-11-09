import styles from "./components.module.css";
import Book from "../book/page";

export default function DesktopWorksPage() {
  return (
    <>
      <div className='desktopLayout'>
        <div className={styles.desktopOnly}>
          <Book />
        </div>
      </div>
    </>
  );
}
