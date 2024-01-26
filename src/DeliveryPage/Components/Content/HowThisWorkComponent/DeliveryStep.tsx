import { Col, Carousel } from "react-bootstrap";
import ShowMoreButton from "../../../../Reusable/YellowButton/ShowMoreButton";
import { PartnersImages } from "../PartnersAppHeader/PartnersImages.const";
import { DeliverySteps } from "./DeliverySteps.const";
import styles from "./DeliveryStep.module.scss";

const DeliveryStep = () => (
  <>
    {DeliverySteps.map(({ id, logo, numberImage, text }) => (
      <Col
        sm={6}
        xs={6}
        className={`d-flex flex-column m-0 p-0 align-items-center ${styles.deliveryStepsColumn}`}
        key={id}
      >
        <div
          className={`d-flex m-0 p-0 align-items-center ${styles.deliveryStepsNumber}`}
        >
          <div className={styles.deliveryStepsIndexNumbers}>
            <p>{numberImage}</p>
          </div>
          <div
            className={`d-flex align-items-center ${styles.deliveryStepsIcon}`}
          >
            {id > 1 ? (
              <i className={logo}></i>
            ) : (
              <Carousel
                indicators={false}
                controls={false}
                className={`d-flex ${styles.carouselPartnersImages}`}
              >
                {PartnersImages.map(({ imageSource, key }) => (
                  <Carousel.Item key={key}>
                    <img src={imageSource} />
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </div>
        </div>
        <div
          className={`d-flex flex-column align-items-center text-center ${styles.deliveryStepsText}`}
        >
          <p>{text}</p>
          {id === 2 && (
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
