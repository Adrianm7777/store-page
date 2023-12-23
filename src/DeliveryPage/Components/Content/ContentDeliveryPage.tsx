import { Container } from "react-bootstrap";
import PartnersAppHeader from "./PartnersAppHeader/PartnersAppHeader";
import styles from "./ContentDeliveryPage.module.scss";
import CarouselSlides from "./CarouselSlide/CarouselSlide";

const ContentDeliveryPage = () => (
  <Container
    fluid
    className={`d-flex flex-column h-100 p-0 ${styles.contentDeliveryContainer}`}
  >
    <PartnersAppHeader />
    <CarouselSlides />
  </Container>
);

export default ContentDeliveryPage;
