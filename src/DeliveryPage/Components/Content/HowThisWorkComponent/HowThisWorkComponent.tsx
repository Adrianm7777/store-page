import { Container, Row, Col, Carousel } from "react-bootstrap";
import styles from "./HowThisWorkComponent.module.scss";
import { DeliverySteps } from "./DeliverySteps.const";
import ShowMoreButton from "../../../../Reusable/YellowButton/ShowMoreButton";
import { PartnersImages } from "../PartnersAppHeader/PartnersImages.const";
import DeliveryStep from "./DeliveryStep";

const HowThisWorkComponent = () => (
  <Container fluid className={`mt-5 ${styles.howThisWorkContainer}`}>
    <Row
      xxl={6}
      xl={5}
      lg={5}
      md={5}
      sm={2}
      xs={5}
      className="d-flex h-100 align-items-center"
    >
      <Col
        xxl={4}
        sm="auto"
        xs="auto"
        className={`d-flex flex-column ${styles.howItWorkHeader}`}
      >
        <h3>Jak to działa</h3>
        <p>
          Usługa McDelivery® działa w wybranych lokalizacjach w całej Polsce.
          Złóż zamówienie i delektuj się pysznościami z Maka w swoim domu!
        </p>
      </Col>
      <DeliveryStep />
    </Row>
  </Container>
);

export default HowThisWorkComponent;
