import styles from "./components.module.css";
import styles1 from "./DesktopAboutPage.module.css";
import { BsGithub, BsTwitterX, BsFacebook } from "react-icons/bs";
import Link from "next/link";
import { WiDayThunderstorm } from "react-icons/wi";

export default function DesktopAboutPage() {
  return (
    <>
      <div
        className={styles.desktopOnly}
        style={{ alignItems: "flex-start", paddingLeft: 0 }}
      >
        <div
          style={{
            width: "100vw",
            height: "15vh",
            backgroundColor: "whitesmoke",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 3,
          }}
        ></div>
        <div
          className={`${styles1.torn_container} ${styles1.torn_left} ${styles1.torn_right}`}
        >
          <div></div>
          <div>
            <div className={styles.firstMyname}>Yuta Saruwatari</div>
            <div className={styles.detail}>
              Hey, My name is Yuta Saruwatari. I specialize in building web
              applications and have a passion for creating seamless user
              experiences and music.
            </div>
            <div className={styles.myname}>Skills</div>
            <div className={styles.detail}>
              Frontend : HTML / CSS / Tailwindcss / JavaSript / TypeScript /
              React / Next.js / Affinity by Canva
            </div>
            <div className={styles.detail}>
              Backend : Go / Python / Node.js / SQL
            </div>
            <div className={styles.detail}>
              Infra :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AWS / Cloudflare
            </div>
            <div className={styles.myname}>Favorite things</div>
            <div className={styles.detail}>
              Guiter/Go to a music festival/Playing sports
            </div>
            <div className={`${styles.icon} ${styles1.iconWrapper}`}>
              <Link
                href='https://github.com/uta-s-dao'
                className={styles.icona}
              >
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
        </div>
      </div>
    </>
  );
}
