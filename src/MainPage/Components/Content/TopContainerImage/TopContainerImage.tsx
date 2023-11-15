import styles from "./TopContainerImage.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "../../../../Reusable/YellowButton/Button";

const TopContainerImage = () => (
  <Container fluid className={styles.topContainer}>
    <Row className="w-100">
      <a href="/burger-drwal" className="w-100 h-90 p-0">
        <img
          src="https://cdn.mcdonalds.pl/uploads/20231107170629/burger-drwala-desktop.jpg"
          className="w-100 h-100"
        />
      </a>
    </Row>
    <div
      className={`d-flex justify-content-center align-items-center position-relative ${styles.topButtonContainer}`}
    >
      <Button btnHref="/burger-drwal" btnText="SPRAWDŹ" isbuttonHidden={true} />
    </div>
  </Container>
);

export default TopContainerImage;
