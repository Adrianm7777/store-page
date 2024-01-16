import { Container, Row, Col, Carousel } from "react-bootstrap";
import styles from "./HowThisWorkComponent.module.scss";
import { DeliverySteps } from "./DeliverySteps.const";
import ShowMoreButton from "../../../../Reusable/YellowButton/ShowMoreButton";
import { PartnersImages } from "../PartnersAppHeader/PartnersImages.const";

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
      {DeliverySteps.map((step) => (
        <Col
          sm={6}
          xs={6}
          className={`d-flex flex-column m-0 p-0 align-items-center ${styles.deliveryStepsColumn}`}
        >
          <div
            className={`d-flex m-0 p-0 align-items-center ${styles.deliveryStepsNumber}`}
          >
            <div className={styles.deliveryStepsIndexNumbers}>
              <p>{step.numberImage}</p>
            </div>
            <div
              className={`d-flex align-items-center ${styles.deliveryStepsIcon}`}
            >
              {step.id > 1 ? (
                <i className={step.logo}></i>
              ) : (
                <Carousel
                  indicators={false}
                  controls={false}
                  className={`d-flex ${styles.carouselPartnersImages}`}
                >
                  {PartnersImages.map((image) => (
                    <Carousel.Item>
                      <img src={image.imageSource} />
                    </Carousel.Item>
                  ))}
                </Carousel>
              )}
            </div>
          </div>
          <div
            className={`d-flex flex-column align-items-center text-center ${styles.deliveryStepsText}`}
          >
            <p>{step.text}</p>
            {step.id === 2 && (
              <ShowMoreButton
                btnHref=""
                btnText="Lista miejscowości"
                isbuttonHidden={true}
              />
            )}
          </div>
        </Col>
      ))}
    </Row>
  </Container>
);

export default HowThisWorkComponent;
