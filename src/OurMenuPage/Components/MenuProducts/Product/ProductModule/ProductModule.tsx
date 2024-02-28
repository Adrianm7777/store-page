import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PlusAndMinusButton from "../../../../../Reusable/PlusAndMinusButton/PlusAndMinusButton";

interface ProductModuleProps {
  handleClose: () => void;
  show: boolean;
  title: string;
  price: number;
  numberOfProducts: number;
  totalPrice: number;
  setNumberOfProducts: React.Dispatch<React.SetStateAction<number>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

const ProductModule = ({
  handleClose,
  show,
  title,
  price,
  numberOfProducts,
  setNumberOfProducts,
  setTotalPrice,
  totalPrice,
}: ProductModuleProps) => (
  <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{`${totalPrice.toFixed(2)} zł`}</Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <PlusAndMinusButton
          price={price}
          numberOfProducts={numberOfProducts}
          setNumberOfProducts={setNumberOfProducts}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
        <Button variant="primary">Dodaj do zamówienia</Button>
      </Modal.Footer>
    </Modal>
  </>
);

export default ProductModule;
