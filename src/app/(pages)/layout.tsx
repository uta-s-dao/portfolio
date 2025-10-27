import DesktopNavButton from "../components/DesktopNavButton";
import MobileNavButton from "../components/MobileNavButton";
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
          <DesktopNavButton />
          <MobileNavButton />
        </div>
      </div>
      <div>{children}</div>
    </>
  );
}
