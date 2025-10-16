import DesktopComponent from "./components/Desktop";
import MobileComponent from "./components/Mobile";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.mobileOnly}>
        <MobileComponent />
      </div>
      <div className={styles.desktopOnly}>
        <DesktopComponent />
      </div>
    </>
  );
}
