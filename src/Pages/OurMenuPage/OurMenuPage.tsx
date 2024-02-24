import { Container } from "react-bootstrap";
import MenuBaner from "../../OurMenuPage/Components/MenuBaner/MenuBaner";
import MenuProducts from "../../OurMenuPage/Components/MenuProducts/Products/MenuProducts";
import styles from "./OurMenuPage.module.scss";

const OurMenuPage = () => (
  <Container
    fluid
    className={`d-flex flex-column h-100 g-0 m-0 p-0 position-relative ${styles.ourMenuPageContainer}`}
  >
    <MenuBaner />
    <MenuProducts />
  </Container>
);

export default OurMenuPage;
