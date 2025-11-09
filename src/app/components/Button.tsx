import ViewTransitionLink from "./ViewTransitionLink";
import { ReactNode } from "react";
import styles from "../page.module.css";

interface ButtonProps {
  href: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({ href, children, active, className: customClassName, onClick, ...props }: ButtonProps) => {
  const className = customClassName
    ? customClassName
    : active
    ? `${styles.buttonLink} ${styles.buttonActive}`
    : styles.buttonLink;

  return (
    <ViewTransitionLink href={href} className={className} onClick={onClick} {...props}>
      {children}
    </ViewTransitionLink>
  );
};

export default Button;
