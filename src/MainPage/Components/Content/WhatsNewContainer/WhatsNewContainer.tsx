import Container from "react-bootstrap/Container";
import WhatsNewTitle from "./WhatsNewTitle/WhatsNewTitle";
import WhatsNewImage from "./WhatsNewImage/WhatsNewImage";
import ShowMoreButton from "../../../../Reusable/YellowButton/ShowMoreButton";

const WhatsNewContainer = () => (
  <Container fluid className="d-flex h-100 flex-column gap-3">
    <WhatsNewTitle />
    <WhatsNewImage />
    <ShowMoreButton
      btnHref="/co-nowego"
      btnText="POKAŻ WSZYSTKO"
      isbuttonHidden={false}
    />
  </Container>
);

export default WhatsNewContainer;
