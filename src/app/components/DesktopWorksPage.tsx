import styles from "./components.module.css";
import Book from "./book/Book";

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
