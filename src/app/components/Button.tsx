import ViewTransitionLink from "./ViewTransitionLink";
import { ReactNode } from "react";
import styles from "../page.module.css";

interface ButtonProps {
  href: string;
  children: ReactNode;
  active?: boolean;
}

const Button = ({ href, children, active, ...props }: ButtonProps) => {
  const className = active
    ? `${styles.buttonLink} ${styles.buttonActive}`
    : styles.buttonLink;

  return (
    <ViewTransitionLink href={href} className={className} {...props}>
      {children}
    </ViewTransitionLink>
  );
};

export default Button;
