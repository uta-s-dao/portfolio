import styles from "../page.module.css";
import Button from "./Button";

export default function MobileComponent() {
  return (
    <>
      <div className={styles.topContainer}>
        <div style={{ fontSize: "6vh" }}>Yuta Saruwatari</div>
        <div style={{ fontSize: "3vh" }}>Software Engineer</div>
        <div className={styles.button}>
          <Button href='desktop/works'>Works</Button>
          <Button href='desktop/about'>About</Button>
        </div>
      </div>
    </>
  );
}
