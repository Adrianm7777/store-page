import styles from "./TopContainerImage.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "../../../../Reusable/YellowButton/Button";

const TopContainerImage = () => {
  return (
    <Container fluid className={styles.topContainer}>
      <Row className=" w-100 ">
        <a href="/burger-drwal">
          <img src="https://cdn.mcdonalds.pl/uploads/20231107170629/burger-drwala-desktop.jpg" />
        </a>
      </Row>
      <div className={styles.checkButton}>
        <Button
          btnHref="/burger-drwal"
          btnText="SPRAWDŹ"
          isbuttonHidden={true}
        />
      </div>
    </Container>
  );
};

export default TopContainerImage;
