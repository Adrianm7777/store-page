import Product, { ProductProps } from "./Product";
import { Row } from "react-bootstrap";

interface ProductCompontentProps {
  title: string;
  product: ProductProps[];
  id: string;
}
const ProductComponent = ({ title, product, id }: ProductCompontentProps) => (
  <Row className="d-flex w-100 flex-wrap" id={id}>
    <h2>{title}</h2>
    {product.map(({ id, imageLink, title }) => (
      <Product key={id} id={id} imageLink={imageLink} title={title} />
    ))}
  </Row>
);

export default ProductComponent;
