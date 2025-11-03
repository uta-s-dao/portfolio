"use client";

import styles from "./components.module.css";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function DesktopNavButton() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (pathname) {
      // Get the first segment after the leading slash
      const segments = pathname.split("/").filter(segment => segment !== "");
      const firstSegment = segments[0] || "";
      const capitalized = firstSegment.charAt(0).toUpperCase() + firstSegment.slice(1);
      setCurrentPath(capitalized);
    }
  }, [pathname]);

  return (
    <>
      <div className={styles.desktopNav}>
        <div className={styles.title}>{currentPath}</div>
        <div className={styles.navigation}>
          <Button
            href='/'
            active={currentPath === "Home" || currentPath === ""}
          >
            Home
          </Button>
          <Button href='/works' active={currentPath === "Works"}>
            Works
          </Button>
          <Button href='/about' active={currentPath === "About"}>
            About
          </Button>
        </div>
      </div>
    </>
  );
}
