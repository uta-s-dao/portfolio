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
        <Button href='/' active={currentPath === "Home" || currentPath === ""}>
          Home
        </Button>
        <Button href='works' active={currentPath === "Works"}>
          Works
        </Button>
        <Button href='about' active={currentPath === "About"}>
          About
        </Button>
      </div>
    </>
  );
}
