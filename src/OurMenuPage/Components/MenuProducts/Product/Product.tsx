import { Col } from "react-bootstrap";
import styles from "./Product.module.scss";

interface ProductProps {
  title: string;
  imageLink: string;
  id: number;
}

const Product = ({ title, imageLink, id }: ProductProps) => (
  <Col
    key={id}
    className={`d-flex flex-column w-25 gap-3 p-3 text-center fw-bold ${styles.productColumn}`}
  >
    <img src={imageLink} alt={title} />
    <p>{title}</p>
  </Col>
);

export default Product;
