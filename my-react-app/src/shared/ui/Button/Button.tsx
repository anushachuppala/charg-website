import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  variant: "primary" | "secondary" | "Tertiary";
  className?: string;
};

function Button({ text, variant, className = "" }: ButtonProps) {
  return <button className={`${styles[variant]} ${className}`}>{text}</button>;
}

export default Button;
