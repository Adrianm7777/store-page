import { Container } from "react-bootstrap";
import PartnersAppHeader from "./PartnersAppHeader/PartnersAppHeader";
import styles from "./ContentDeliveryPage.module.scss";
import CarouselSlides from "./CarouselSlide/CarouselSlide";
import HowThisWorkComponent from "./HowThisWorkComponent/HowThisWorkComponent";
import Localisation from "./LocalisationComponent/Localisation";
import Faq from "./FaqComponent/Faq";

const ContentDeliveryPage = () => (
  <Container
    fluid
    className={`d-flex flex-column h-100 p-0 g-0 ${styles.contentDeliveryContainer}`}
  >
    <PartnersAppHeader />
    <CarouselSlides />
    <HowThisWorkComponent />
    <Localisation />
    <Faq />
  </Container>
);

export default ContentDeliveryPage;
