import TopContainerImage from "./TopContainerImage/TopContainerImage";
import styles from "./Content.module.scss";
import Container from "react-bootstrap/Container";
import WhatsNewContainer from "./WhatsNewContainer/WhatsNewContainer";
import MobileAppSection from "./MobileAppSection/MobileAppSection";

const Content = () => (
  <Container
    fluid
    className={`d-flex flex-column h-100 p-0 ${styles.contentContainer}`}
  >
    <TopContainerImage />
    <WhatsNewContainer />
    <MobileAppSection />
  </Container>
);
export default Content;
