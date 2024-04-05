import Product from "./Product";
import { Row } from "react-bootstrap";

interface ProductCompontentProps {
  title: string;
  products: ProductType[];
  id: string;
}
const ProductComponent = ({ title, products, id }: ProductCompontentProps) => (
  <Row className="d-flex w-100 flex-wrap" id={id}>
    <h2>{title}</h2>
    {products?.map((product) => (
      <Product key={product?.id} product={product} />
    ))}
  </Row>
);

export default ProductComponent;
