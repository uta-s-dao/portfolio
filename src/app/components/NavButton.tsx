import styles from "../page.module.css";
import Button from "./Button";

const NavButton = () => {
  return (
    <>
      <div className={styles.navigation}>
        <Button href='/'>Home</Button>
        <Button href='http://localhost:3000/desktop/works'>Works</Button>
        <Button href='http://localhost:3000/desktop/about'>About</Button>
      </div>
    </>
  );
};

export default NavButton;
