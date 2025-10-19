"use client";

import styles from "./components.module.css";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavButton() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (pathname) {
      const lastSlashIndex = pathname.lastIndexOf("/");
      const tmp = pathname.slice(lastSlashIndex + 1);
      const capitalized = tmp.charAt(0).toUpperCase() + tmp.slice(1);
      setCurrentPath(capitalized);
    }
  }, [pathname]);

  return (
    <>
      <div className={styles.title}>{currentPath}</div>
      <div className={styles.navigation}>
        <span className={currentPath === 'Home' || currentPath === '' ? styles.activeNav : ''}>
          <Button href='/'>Home</Button>
        </span>
        <span className={currentPath === 'Works' ? styles.activeNav : ''}>
          <Button href='http://localhost:3000/desktop/works'>Works</Button>
        </span>
        <span className={currentPath === 'About' ? styles.activeNav : ''}>
          <Button href='http://localhost:3000/desktop/about'>About</Button>
        </span>
      </div>
    </>
  );
}
