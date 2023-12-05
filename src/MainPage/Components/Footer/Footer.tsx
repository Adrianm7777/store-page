import { Col, Container, Row } from "react-bootstrap";
import HeaderLogo from "../Header/HeaderLogo/HeaderLogo";
import SocialMedia from "../Header/HeaderButtons/SocialMedia/SocialMedia";
import { FooterLinksFirst, FooterLinksSecond } from "./FooterLinks.consts";
import styles from "./Footer.module.scss";

const Footer = () => (
  <Container fluid className="d-flex flex-column m-0 gap-4">
    <Row className={`pt-5 gap-3 ${styles.footerContainer}`}>
      <Col
        className={`d-flex align-items-start justify-content-end ${styles.headerFooterContainer}`}
      >
        <HeaderLogo
          href="/"
          src="https://cdn.mcdonalds.pl/public/build/images/header/logo3.19d7d61fd29210afe458d0de4d0a7ca6.svg"
        />
      </Col>
      <Col
        className={`d-flex flex-column flex-wrap font-weight-bold ${styles.linksFirstTabel}`}
      >
        {FooterLinksFirst.map((link) => (
          <a href={link.href} className="h-25 fw-bold">
            {link.text}
          </a>
        ))}
      </Col>
      <Col
        className={`d-flex flex-column flex-wrap ${styles.linksSecondTabel}`}
      >
        {FooterLinksSecond.map((link) => (
          <a href={link.href} className={styles.linksSecondList}>
            {link.text}
          </a>
        ))}
      </Col>
      <Col
        className={`d-flex flex-column gap-4 align-items-center justify-content-center ${styles.footerSocialMedia}`}
      >
        <div className={`d-flex gap-3 ${styles.footerSocialMediaImage}`}>
          <a>
            <img src="https://cdn.mcdonalds.pl/public/build/images/home/sections/appstore.ed7318c953882726842f814b7c5cfe43.png" />
          </a>
          <a>
            <img src="https://cdn.mcdonalds.pl/public/build/images/home/sections/googleplay.2eee13f33c5cc3cb2012a25ee9ca43fe.png" />
          </a>
        </div>
        <SocialMedia />
      </Col>
    </Row>
    <Row
      className={`d-flex justify-content-center align-items-center text-center ${styles.copyrightText}`}
    >
      <p>
        © 2023 McDonald’s Corporation. Prawa do znaków towarowych zastrzeżone.
      </p>
      <p>
        McDonald’s Polska Sp. z o. o. z siedzibą w Warszawie ul. Marynarska 15,
        02-674 Warszawa Sąd Rejonowy dla m. st. Warszawy, XIII Wydz. Gospodarczy
        Krajowego Rejestru Sądowego, nr KRS 0000097409 NIP 521-008-81-10 BDO
        000046426 Kapitał zakładowy: 151.569.758,98 zł.
      </p>
    </Row>
  </Container>
);

export default Footer;
