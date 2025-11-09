import styles from "./components.module.css";
import styles1 from "./MobileAboutPage.module.css";
import { BsGithub, BsTwitterX, BsFacebook } from "react-icons/bs";
import Link from "next/link";

export default function MobileAboutPage() {
  return (
    <>
      <div className='mobileLayout'>
        <div className={styles1.aboutBackground}></div>
        <div className={styles1.animation}>
          <div
            className={`${styles1.torn_container} ${styles1.torn_left} ${styles1.torn_right}`}
          >
            <div></div>
            <div>
              <div className={styles.mobileMyname}>Yuta Saruwatari</div>
              <div className={styles.mobileDetail}>
                Hey, My name is Yuta Saruwatari. I specialize in building web
                applications and have a passion for creating seamless user
                experiences and music.
              </div>
              <div className={styles.mobileMyname}>Skills</div>
              <div className={styles.mobileDetail}>
                Frontend:
                <span className={styles.span}>
                  HTML / CSS / Tailwindcss / JavaSript / TypeScript / React /
                  Next.js / Affinity by Canva
                </span>
              </div>
              <div className={styles.mobileDetail}>
                Backend:
                <span className={styles.span}>
                  {" "}
                  Go / Python / Node.js / SQL
                </span>
              </div>
              <div className={styles.mobileDetail}>
                Infra: &nbsp; &nbsp; &nbsp;
                <span className={styles.span}> AWS / Cloudflare</span>
              </div>
              <div className={styles.mobileMyname}>Favorite things</div>
              <div className={styles.mobileDetail}>
                Guiter/Go to a music festival/Playing sports
              </div>
              <div className={`${styles.mobileIcon} ${styles1.iconWrapper}`}>
                <Link
                  href='https://github.com/uta-s-dao'
                  className={styles.icona}
                >
                  <BsGithub size={50} color='rgb(0,100,0)' />
                </Link>
                <Link
                  href='https://x.com/super___thick'
                  className={styles.icona}
                >
                  <BsTwitterX size={50} color='rgb(0,100,0)' />
                </Link>
                <Link
                  href='https://www.facebook.com/share/1DRV8gWVED/?mibextid=wwXIfr'
                  className={styles.icona}
                >
                  <BsFacebook size={50} color='rgb(0,100,0)' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
