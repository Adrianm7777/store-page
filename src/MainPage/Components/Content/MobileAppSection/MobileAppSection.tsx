import { Container, Row, Col } from "react-bootstrap";
import styles from "./MobileAppSection.module.scss";
import DownloadApp from "./DownloadApp/DownloadApp";
import { useState } from "react";
import PhoneAnimation from "./PhoneAnimation/PhoneAnimation";

const MobileAppSection = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Container
      fluid
      className={`d-flex vh-100 p-0 m-0 justify-content-center align-items-center ${styles.appSection}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Row
        className={`d-flex w-100 h-50 m-0 p-0 position-relative ${styles.mobileAppContainer}`}
      >
        <Col
          className={`d-flex justify-content-center align-items-center ${styles.firstColumn}`}
        >
          <DownloadApp isHover={isHover} />
        </Col>
        <Col
          className={`d-flex justify-content-center align-items-center p-0 ${styles.secondColumn}`}
        >
          <PhoneAnimation isHover={isHover} />
        </Col>
      </Row>
    </Container>
  );
};

export default MobileAppSection;
