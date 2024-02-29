import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PlusAndMinusButton from "../../../../../Reusable/PlusAndMinusButton/PlusAndMinusButton";

interface ProductModalProps {
  handleClose: () => void;
  show: boolean;
  title: string;
  numberOfProducts: number;
  totalPrice: number;
  setNumberOfProducts: React.Dispatch<React.SetStateAction<number>>;
}

const ProductModal = ({
  handleClose,
  show,
  title,
  numberOfProducts,
  setNumberOfProducts,
  totalPrice,
}: ProductModalProps) => (
  <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{`${totalPrice.toFixed(2)} zł`}</Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <PlusAndMinusButton
          numberOfProducts={numberOfProducts}
          setNumberOfProducts={setNumberOfProducts}
        />
        <Button variant="primary">Dodaj do zamówienia</Button>
      </Modal.Footer>
    </Modal>
  </>
);

export default ProductModal;
