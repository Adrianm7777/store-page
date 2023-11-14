import styles from "./Button.module.scss";

interface ButtonProps {
  btnText: string;
  btnHref: string;
  isbuttonHidden: boolean;
}
const Button = ({ btnText, btnHref, isbuttonHidden }: ButtonProps) => {
  const changeClass = isbuttonHidden
    ? `${styles.buttonContainer} ${styles.buttonContainerHidden}`
    : styles.buttonContainer;
  return (
    <div className={changeClass}>
      <a href={btnHref}>
        <p>{btnText}</p>
      </a>
    </div>
  );
};

export default Button;
