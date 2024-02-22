import styles from "./ShowMoreButton.module.scss";
import Container from "react-bootstrap/Container";

interface ShowMoreButtonProps {
  btnText: string;
  btnHref?: string;
  isbuttonHidden?: boolean;
  className?: string;
  onClick?: () => void;
}
const ShowMoreButton = ({
  btnText,
  btnHref,
  isbuttonHidden,
  className,
  onClick,
}: ShowMoreButtonProps) => {
  const changeClass = isbuttonHidden
    ? `${styles.buttonContainer} ${styles.buttonContainerHidden}`
    : styles.buttonContainer;
  return (
    <Container
      onClick={onClick}
      className={`d-flex justify-content-center align-items-center position-relative overflow-hidden p-0 ${changeClass} ${className}`}
    >
      <a
        className="d-flex justify-content-center align-items-center w-100 h-100"
        href={btnHref}
      >
        <p className="m-0">{btnText}</p>
      </a>
    </Container>
  );
};

export default ShowMoreButton;
