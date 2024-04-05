import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../../Redux/Store/Store";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../Redux/Slices/CartSlices/CartSlice";
import styles from "./CartShopping.module.scss";
import { Col, Row } from "react-bootstrap";

const CartShopping = () => {
  const [show, setShow] = useState(false);

  const cart = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleRemoveItem = (id: number) => {
    dispatch(removeProduct(id));
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className={`me-2 w-25 d-flex justify-content-between ${styles.buttonCart}`}
      >
        <div
          className={`m-0 p-0 rounded-circle text-primary ${styles.quantityDisplay}`}
        >
          {cart.quantityOfAllProducts}
        </div>

        <p className="m-0 p-0">Zobacz zamówienie</p>
        <p className="m-0 p-0">{`${cart.allProductsPrice.toFixed(2)} zł`}</p>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <p>Twoje zamówienie</p>
            Kwota: {cart.allProductsPrice.toFixed(2)}zł Ilość:{" "}
            {cart.quantityOfAllProducts}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          {cart?.products?.map((product) => (
            <Row
              key={product?.id}
              className={`d-flex w-100 p-0 m-0  ${styles.productContainer}`}
            >
              <Col className="d-flex flex-column w-75 m-2 gap-2">
                <h1 className="fs-5">{product?.title}</h1>
                <img src={product?.imageLink} alt="produkt" className="w-100" />
                <Col className="d-flex justify-content-between">
                  <p>{product.totalPrice}zł</p>
                  <div className={`d-flex ${styles.quantityContainer}`}>
                    <p className="w-100 d-flex justify-content-center align-items-center m-0 p-0">
                      {product?.quantity}
                    </p>
                  </div>
                </Col>
              </Col>
              <Col className="d-flex align-items-center justify-content-end m-2">
                <button
                  onClick={() => handleRemoveItem(product?.id)}
                  className={`d-flex ${styles.deleteButton}`}
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </Col>
            </Row>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartShopping;
