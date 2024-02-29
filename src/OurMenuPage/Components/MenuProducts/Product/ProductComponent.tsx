import Product from "./Product";
import { Row } from "react-bootstrap";

interface ProductCompontentProps {
  title: string;
  product: ProductType[];
  id: string;
}
const ProductComponent = ({ title, product, id }: ProductCompontentProps) => (
  <Row className="d-flex w-100 flex-wrap" id={id}>
    <h2>{title}</h2>
    {product.map(({ id, imageLink, title, price }) => (
      <Product
        key={id}
        id={id}
        imageLink={imageLink}
        title={title}
        price={price}
      />
    ))}
  </Row>
);

export default ProductComponent;
