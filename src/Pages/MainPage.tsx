import Content from "../MainPage/Components/Content/Content";
import Header from "../MainPage/Components/Header/Header";
import Container from "react-bootstrap/Container";
import Footer from "../MainPage/Components/Footer/Footer";

const MainPage = () => (
  <Container fluid className="h-100 p-0">
    <Header />
    <Content />
    <Footer />
  </Container>
);

export default MainPage;
