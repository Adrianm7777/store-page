import { Container, Row } from "react-bootstrap";
import PartnersImages from "./PartnersImages.const";

const PartnersAppHeader = () => {
  return (
    <Container>
      <Row>
        <h2>
          Aby złożyć zamówienie, skorzystaj z aplikacji lub strony partnera:
        </h2>
      </Row>
      <Row>
        {PartnersImages.map(({ href, imageSource }) => (
          <a target="_blank" rel="noopener" href={href}>
            <img src={imageSource} />
          </a>
        ))}
      </Row>
    </Container>
  );
};

export default PartnersAppHeader;
