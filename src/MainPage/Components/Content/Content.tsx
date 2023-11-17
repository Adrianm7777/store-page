import TopContainerImage from "./TopContainerImage/TopContainerImage";
import styles from "./Content.module.scss";
import Container from "react-bootstrap/Container";
import WhatsNewContainer from "./WhatsNewContainer/WhatsNewContainer";

const Content = () => (
  <Container
    fluid
    className={`d-flex flex-column h-100 ${styles.contentContainer}`}
  >
    <TopContainerImage />
    <WhatsNewContainer />
  </Container>
);
export default Content;
