import { Container } from "react-bootstrap";
import Slides from "./Slides.consts";
import ShowMoreButton from "./../../../../Reusable/YellowButton/ShowMoreButton";
import styles from "./CarouselSlide.module.scss";
import Carousel from "react-bootstrap/Carousel";

const CarouselSlides = () => (
  <Carousel indicators={false} interval={null} touch={true} className="mt-5">
    {Slides.map((slide) => (
      <Carousel.Item key={slide.id} className="h-100 w-100">
        <div
          className={`d-flex flex-column justify-content-center align-items-center h-100 overflow-hidden gap-3 ${styles.carouselElement}`}
        >
          <h2>{slide.text}</h2>
          <img
            src={slide.backgroundImage}
            className={`w-100 h-100 m-0 p-0 position-relative $`}
          />
          <ShowMoreButton
            btnHref={slide.hrefButton || ""}
            isbuttonHidden={false}
            btnText="Zamów"
          />
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default CarouselSlides;
