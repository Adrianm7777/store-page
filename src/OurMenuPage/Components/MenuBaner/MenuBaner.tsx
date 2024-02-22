import { Container, Row } from "react-bootstrap";
import styles from "./MenuBaner.module.scss";

const MenuBaner = () => {
  return (
    <Container fluid className="d-flex h-100 g-0 p-0 m-0 position-relative">
      <Row
        className={`d-flex w-100 g-0 position-relative ${styles.imageBanerContainer}`}
      >
        <h2 className="fs-1 fw-bold position-absolute top-50 w-100 text-center text-white">
          Nasze menu
        </h2>
      </Row>
    </Container>
  );
};

export default MenuBaner;
