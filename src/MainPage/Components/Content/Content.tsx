import TopContainerImage from "./TopContainerImage/TopContainerImage";
import styles from "./Content.module.scss";
import Container from "react-bootstrap/Container";

const Content = () => (
  <Container fluid className={`d-flex h-100 ${styles.contentContainer}`}>
    <TopContainerImage />
  </Container>
);
export default Content;
