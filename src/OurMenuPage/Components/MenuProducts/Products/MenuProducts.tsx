import { Container } from "react-bootstrap";
import ButtonsArray from "../ButtonsArray/ButtonsArray";
import ProductComponent from "../Product/ProductComponent";
import { ProductCategories } from "../Product/ProductCategories.const";

const MenuProducts = () => (
  <Container fluid className="d-flex flex-column h-100 bg-white mt-3">
    <ButtonsArray />
    {ProductCategories.map(({ title, product, id }) => (
      <ProductComponent key={title} title={title} product={product} id={id} />
    ))}
  </Container>
);

export default MenuProducts;
