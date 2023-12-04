import TopContainerImage from "./TopContainerImage/TopContainerImage";
import styles from "./Content.module.scss";
import Container from "react-bootstrap/Container";
import WhatsNewContainer from "./WhatsNewContainer/WhatsNewContainer";
import MobileAppSection from "./MobileAppSection/MobileAppSection";
import McdonaldsWorldSection from "./McdonaldsWorldSection/McdonaldsWorldSection";

const Content = () => (
  <Container
    fluid
    className={`d-flex flex-column h-100 p-0 ${styles.contentContainer}`}
  >
    <TopContainerImage />
    <WhatsNewContainer />
    <MobileAppSection />
    <McdonaldsWorldSection />
  </Container>
);
export default Content;
