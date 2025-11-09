"use client";

import styles from "./components.module.css";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import Button from "./Button";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Works", href: "/works" },
  { name: "About", href: "/about" },
];

export default function MobileNavButton() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname) {
      // /works配下のパスは全て"Works"と表示
      if (pathname.startsWith("/works")) {
        setCurrentPath("Works");
      } else {
        const lastSlashIndex = pathname.lastIndexOf("/");
        const tmp = pathname.slice(lastSlashIndex + 1);
        const capitalized = tmp.charAt(0).toUpperCase() + tmp.slice(1);
        setCurrentPath(capitalized);
      }
    }
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div
        className={`${styles.mobileNavWrapper} ${
          currentPath === "About" ? styles.mobileNavWrapperAbout : ""
        }`}
      ></div>
      <div className={styles.mobileNav}>
        <div className={styles.mobilenavlocation}>
          <div className={styles.mobiletitle}>{currentPath}</div>
          <button onClick={toggleMenu} className={styles.menubutton}>
            {menuOpen ? (
              <>
                <IoCloseOutline size={40} color='rgb(85, 84, 84)' />
              </>
            ) : (
              <IoIosMenu size={40} color='rgb(85, 84, 84)' />
            )}
          </button>
        </div>
      </div>
      {menuOpen && <div className={styles.overlay} onClick={toggleMenu} />}
      <nav className={`${styles.sideMenu} ${menuOpen ? styles.open : ""}`}>
        <ul className={styles.menuList}>
          {menuItems.map((item) => (
            <li key={item.href} className={styles.menuItem}>
                  <Button
                href={item.href}
                className={`${styles.menuLink} ${
                  pathname === item.href ? styles.active : ""
                }`}
                onClick={handleLinkClick}
              >
                <span className={styles.menuText}>{item.name}</span>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
