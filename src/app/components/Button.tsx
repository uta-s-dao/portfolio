import Link from "next/link";
import { ReactNode } from "react";
import styles from "../page.module.css";

interface ButtonProps {
  href: string;
  children: ReactNode;
}

const Button = ({ href, children, ...props }: ButtonProps) => {
  return (
    <Link href={href} className={styles.buttonLink} {...props}>
      {children}
    </Link>
  );
};

export default Button;
