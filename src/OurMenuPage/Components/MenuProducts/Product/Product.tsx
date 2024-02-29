import { Col } from "react-bootstrap";
import styles from "./Product.module.scss";
import { useState } from "react";
import ProductModal from "./ProductModal/ProductModal";

interface ProductProps {
  title: string;
  imageLink: string;
  id: number;
  price: number;
}

const Product = ({ title, imageLink, id, price }: ProductProps) => {
  const [show, setShow] = useState(false);
  const [numberOfProducts, setNumberOfProducts] = useState(1);

  const totalPrice = numberOfProducts * price;

  const handleClose = () => {
    setShow((prevState) => !prevState);
    setNumberOfProducts(1);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Col
        key={id}
        className={`d-flex flex-column w-25 gap-3 p-3 text-center fw-bold position-relative ${styles.productColumn}`}
        onClick={handleShow}
      >
        <img src={imageLink} alt={title} />
        <i
          className={`bi bi-bag-plus-fill position-absolute ${styles.bagIcon}`}
        ></i>
        <p>{title}</p>
        <p>{`${price} zł`}</p>
      </Col>
      {show && (
        <ProductModal
          handleClose={handleClose}
          show={show}
          title={title}
          numberOfProducts={numberOfProducts}
          totalPrice={totalPrice}
          setNumberOfProducts={setNumberOfProducts}
        />
      )}
    </>
  );
};

export default Product;
