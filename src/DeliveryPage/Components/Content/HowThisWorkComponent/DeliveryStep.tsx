import { Col, Carousel } from "react-bootstrap";
import ShowMoreButton from "../../../../Reusable/YellowButton/ShowMoreButton";
import { PartnersImages } from "../PartnersAppHeader/PartnersImages.const";
import { DeliverySteps } from "./DeliverySteps.const";
import styles from "./DeliveryStep.module.scss";

const DeliveryStep = () => (
  <>
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
  </>
);

export default DeliveryStep;
