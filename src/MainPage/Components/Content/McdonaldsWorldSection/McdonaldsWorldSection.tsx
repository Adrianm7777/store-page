import { Container, Row } from "react-bootstrap";
import styles from "./McdonaldsWorldSection.module.scss";
import McdonalsWorldSectionPanels from "./McdonaldsWorldSectionPanels.consts";
import ShowMoreButton from "../../../../Reusable/YellowButton/ShowMoreButton";

const McdonaldsWorldSection = () => {
  return (
    <Container
      className={`w-100 h-100 d-flex flex-column justify-content-center align-items-center gap-5 p-0 ${styles.mcdonaldsWorldSectionContainer}`}
    >
      <div
        className={`d-flex justify-content-center align-items-center w-50 ${styles.mcdonaldsWorldSectionHeader}`}
      >
        <h2>Wejdź do świata McDonald's</h2>
      </div>
      <Row
        className={`w-100 h-100 d-flex flex-wrap gap-5 m-0 p-0 ${styles.mcWorldPanels}`}
      >
        {McdonalsWorldSectionPanels.map((panel) => (
          <div
            className={`d-flex flex-column text-center ${styles.mcWorldPanel}`}
          >
            <a
              href={panel.href}
              className="d-flex flex-column justify-content-between gap-3 w-100 h-100"
            >
              <img src={panel.panelImage} />
              <h2>{panel.title}</h2>
              <ShowMoreButton
                btnHref={panel.href}
                btnText="POKAŻ WIĘCEJ"
                isbuttonHidden={false}
              />
            </a>
          </div>
        ))}
      </Row>
      <ShowMoreButton
        btnHref="swiat-mcdonalds"
        btnText="POKAŻ WSZYSTKO"
        isbuttonHidden={false}
      />
    </Container>
  );
};

export default McdonaldsWorldSection;
