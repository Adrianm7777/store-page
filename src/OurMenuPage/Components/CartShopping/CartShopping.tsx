import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../../Redux/Store/Store";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../Redux/Slices/CartSlices/CartSlice";
import styles from "./CartShopping.module.scss";

const CartShopping = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const cart = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  const handleRemoveItem = (id: number) => {
    dispatch(removeProduct(id));
  };
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="me-2 w-25 d-flex justify-content-between"
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
            Kwota: {cart.allProductsPrice.toFixed(2)}zł Ilość:
            {cart.quantityOfAllProducts}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.products.map((product) => (
            <div key={product.id}>
              <Button onClick={() => handleRemoveItem(product.id)}>Usuń</Button>
              <h1>{product.title}</h1>
              <img src={product.imageLink} alt="produkt" />
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartShopping;
