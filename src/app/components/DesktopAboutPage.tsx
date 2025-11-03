import styles from "./components.module.css";
import { BsGithub, BsTwitterX, BsFacebook } from "react-icons/bs";
import Link from "next/link";

export default function DesktopAboutPage() {
  return (
    <>
      <div className={styles.desktopOnly}>
        <div className={styles.myname}>Yuta Saruwatari</div>
        <div className={styles.detail}>
          Hey, My name is Yuta Saruwatari. I specialize in building web
          applications and have a passion for creating seamless user experiences
          and music.
        </div>
        <div className={styles.myname}>Skills</div>
        <div className={styles.detail}>
          Frontend : HTML / CSS / Tailwindcss / JavaSript / TypeScript / React /
          Next.js
        </div>
        <div></div>
        <div className={styles.detail}>
          Backend : Go / Python / Node.js / SQL
        </div>
        <div></div>
        <div className={styles.detail}>
          Infra :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AWS / Cloudflare
        </div>
        <div></div>
        <div className={styles.myname}>Favorite things</div>
        <div className={styles.detail}>
          Guiter/Go to a music festival/Playing sports
        </div>
        <div className={styles.icon}>
          <Link href='https://github.com/uta-s-dao' className={styles.icona}>
            <BsGithub size={70} color='rgb(0,100,0)' />
          </Link>
          <Link href='https://x.com/super___thick' className={styles.icona}>
            <BsTwitterX size={70} color='rgb(0,100,0)' />
          </Link>
          <Link
            href='https://www.facebook.com/share/1DRV8gWVED/?mibextid=wwXIfr'
            className={styles.icona}
          >
            <BsFacebook size={70} color='rgb(0,100,0)' />
          </Link>
        </div>
      </div>
    </>
  );
}
