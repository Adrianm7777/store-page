import { Container, Row, Col } from "react-bootstrap";
import styles from "./McdeliveryFooter.module.scss";

const McdeliveryFooter = () => {
  const scrollOnTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container fluid className={`d-flex flex-column ${styles.footerContainer}`}>
      <Row className="d-flex align-items-center justify-content-center h-75 w-100 m-0">
        <Col
          className={`d-flex align-items-center justify-content-center gap-3 fw-bold h-75 ${styles.mcDeliveryFooterLinks}`}
        >
          <a href="nasze-menu/">NASZE MENU</a>
          <a href="aplikacja-mobilna/">APLIKACJA McDONALD'S</a>
          <a href="restauracje/">RESTAURACJE</a>
          <a href="mcdelivery">McDELIVERY</a>
          <a href="dla-rodziny">DLA RODZINY</a>
          <a href="o-mcdonalds">O McDONALD'S</a>
          <a href="o-mcdonalds/franczyza">FRANCZYZA</a>
        </Col>
      </Row>
      <Row
        className={`d-flex justify-content-between ${styles.mcdonaldCorporationFooter}`}
      >
        <Col className="d-flex">
          <p>
            2024 McDonald’s Corporation. Prawa do znaków towarowych zastrzeżone
          </p>
        </Col>
        <Col
          className={`d-flex justify-content-between ${styles.informationLinks}`}
        >
          <a href="regulaminy">Regulamin</a>
          <a href="ochrona-prywatnosci-przeglad">Ochrona prywatności</a>
          <a href="https://cdn.mcdonalds.pl/uploads/20231207123357/352978-tabela-wo-8-11-2023-mop.pdf?openOutsideMcd=true">
            Tabela wartości odżywczych
          </a>
          <a href="ograniczenia-menu">Ograniczenia menu</a>
          <a href="franczyza">Franczyza</a>
          <a href="centrum-pomocy">Centrum Pomocy</a>
        </Col>
        <div
          className={`d-flex justify-content-center align-items-center ${styles.onTopButton}`}
          onClick={scrollOnTop}
        >
          <img
            src="https://cdn.mcdonalds.pl/public/build/images/icon/arrowTop.2584f6dca53569e56980a4a82a7c58b4.svg"
            className="w-100"
          />
        </div>
      </Row>
      <Row className={`d-flex text-center ${styles.mcdonaldsEndFooter}`}>
        <p>
          McDonald’s Polska Sp. z o. o. z siedzibą w Warszawie ul. Marynarska
          15, 02-674 Warszawa Sąd Rejonowy dla m. st. Warszawy, XIII Wydz.
          Gospodarczy Krajowego Rejestru Sądowego, nr KRS 0000097409 NIP
          521-008-81-10 BDO 000046426 Kapitał zakładowy: 151.569.758,98 zł.
        </p>
      </Row>
    </Container>
  );
};

export default McdeliveryFooter;
