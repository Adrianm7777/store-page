import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styles from "./Backbutton.module.scss";
import { useEffect, useState } from "react";

const BackButton = () => {
  const [showBackButton, setshowBackButton] = useState(false);

  const pageLocation = useLocation();

  useEffect(() => {
    setshowBackButton(pageLocation.pathname !== "/");
  }, [pageLocation]);

  return (
    <Container
      className={`position-absolute m-0 ${
        showBackButton ? styles.backButtonContainer : styles.hideBackButton
      }`}
    >
      <Link to={"/"}>
        Wróć do <strong>Strona główna</strong>
      </Link>
    </Container>
  );
};

export default BackButton;
