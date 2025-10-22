import NavButton from "../components/NavButton";
import styles from "../components/components.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={styles.container}>
        <div>
          <NavButton />
        </div>
      </div>
      <div>{children}</div>
    </>
  );
}
