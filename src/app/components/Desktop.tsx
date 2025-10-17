import styles from "../page.module.css";
import Button from "./Button";

export default function DesktopComponent() {
  return (
    <>
      <div className={styles.topContainer}>
        <div className={styles.name}>Yuta Saruwatari</div>
        <div className={styles.job}>Software Engineer</div>

        <div
          style={{
            position: "absolute",
            bottom: "10vh",
            fontSize: "3vh",
            gap: "4vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            color: "black",
          }}
        >
          <Button href='desktop/works'>Works</Button>
          <Button href='desktop/about'>About</Button>
        </div>
      </div>
    </>
  );
}
