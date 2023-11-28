import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import Container from "react-bootstrap/Container";

const MainPage = () => (
  <Container fluid className="h-100 p-0">
    <Header />
    <Content />
  </Container>
);

export default MainPage;
