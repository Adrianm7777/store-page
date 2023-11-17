import Container from "react-bootstrap/Container";
import styles from "./WhatsNewTitle.module.scss";

const WhatsNewTitle = () => {
  return (
    <Container
      fluid
      className={`d-flex justify-content-center align-item-center ${styles.titleContainer}`}
    >
      <h2 className="position-relative">Co nowego w McDonald's?</h2>
    </Container>
  );
};

export default WhatsNewTitle;
