import { Container } from "react-bootstrap";
import styles from "./WhatsNewImage.module.scss";
import WhatsNewPanels from "./WhatsNewPanels.consts";

const WhatsNewImage = () => (
  <Container fluid className="d-flex flex-wrap h-75 mt-3">
    {WhatsNewPanels.map(({ href, imgSrc }) => (
      <a href={href} className={`m-3 ${styles.whatsNewElement}`}>
        <div className={`position-relative ${styles.elementWrapper}`}>
          <img className="w-100 rounded" src={imgSrc} />
        </div>
      </a>
    ))}
  </Container>
);

export default WhatsNewImage;
