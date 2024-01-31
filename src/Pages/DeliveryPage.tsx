import { Container } from "react-bootstrap";
import ContentDeliveryPage from "../DeliveryPage/Components/Content/ContentDeliveryPage";
import McdeliveryFooter from "../DeliveryPage/Components/McdeliveryFooter/McdeliveryFooter";

const DeliveryPage = () => (
  <Container fluid className="h-100 g-0">
    <ContentDeliveryPage />
    <McdeliveryFooter />
  </Container>
);

export default DeliveryPage;
