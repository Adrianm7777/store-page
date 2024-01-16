import { Container, Row, Col } from "react-bootstrap";
import { PartnersImages } from "./PartnersImages.const";
import styles from "./PartnersAppHeader.module.scss";

const PartnersAppHeader = () => (
  <Container
    fluid
    className="d-flex justify-content-end align-items-center mb-5"
  >
    <Row className="d-flex w-100 justify-content-end align-items-center">
      <Col
        xxl="auto"
        xl="auto"
        lg="auto"
        md="auto"
        className={`d-flex p-0 ${styles.partnersHeader}`}
      >
        <h2 className="fs-6 fw-bold">
          Aby złożyć zamówienie, skorzystaj z aplikacji lub strony partnera:
        </h2>
      </Col>
      <Col
        xxl="auto"
        xl="auto"
        lg="auto"
        md="auto"
        className={`d-flex gap-3 ${styles.partnersLinks}`}
      >
        {PartnersImages.map(({ href, imageSource, key }) => (
          <a target="_blank" rel="noopener" href={href} key={key}>
            <img src={imageSource} className="w-100 h-100" />
          </a>
        ))}
      </Col>
    </Row>
  </Container>
);

export default PartnersAppHeader;
