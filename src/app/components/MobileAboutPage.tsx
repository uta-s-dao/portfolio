import styles from "./components.module.css";

export default function MobileAboutPage() {
  return (
    <>
      <div className={styles.mobileOnly}>
        <div className={styles.myname}>Yuta Saruwatari</div>
        <div className={styles.detail}>Mobile About Page - Coming Soon! iku</div>
      </div>
    </>
  );
}
