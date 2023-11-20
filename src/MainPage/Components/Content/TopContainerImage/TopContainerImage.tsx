import styles from "./TopContainerImage.module.scss";
import Container from "react-bootstrap/Container";
import Button from "../../../../Reusable/YellowButton/ShowMoreButton";

const TopContainerImage = () => (
  <Container fluid className={`d-flex flex-column ${styles.topContainer}`}>
    <a href="/burger-drwal" className="w-100 p-0">
      <img
        src="https://cdn.mcdonalds.pl/uploads/20231107170629/burger-drwala-desktop.jpg"
        className="w-100 h-100"
      />
    </a>

    <div
      className={`d-flex justify-content-center align-items-center position-relative h-25 ${styles.topButtonContainer}`}
    >
      <Button btnHref="/burger-drwal" btnText="SPRAWDŹ" isbuttonHidden={true} />
    </div>
  </Container>
);

export default TopContainerImage;
