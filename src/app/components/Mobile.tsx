import styles from "../page.module.css";
import Button from "./Button";

export default function MobileComponent() {
  return (
    <div className={styles.mobileOnly}>
      <div className={styles.topContainer}>
        <div style={{ fontSize: "5vh" }}>Yuta Saruwatari</div>
        <div style={{ fontSize: "3vh" }}>Software Engineer</div>
        <div className={styles.button}>
          <Button href='works'>Works</Button>
          <Button href='about'>About</Button>
        </div>
      </div>
    </div>
  );
}
