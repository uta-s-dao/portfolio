import styles from "../page.module.css";
import Button from "./Button";

export default function DesktopComponent() {
  return (
    <div className={styles.desktopOnly}>
      <div className={styles.topContainer}>
        <div className={styles.name}>Yuta Saruwatari</div>
        <div className={styles.job}>Software Engineer</div>

        <div className={styles.button}>
          <Button href='desktop/works'>Works</Button>
          <Button href='desktop/about'>About</Button>
        </div>
      </div>
    </div>
  );
}
