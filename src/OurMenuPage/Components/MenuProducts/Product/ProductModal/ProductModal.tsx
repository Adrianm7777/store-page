import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PlusAndMinusButton from "../../../../../Reusable/PlusAndMinusButton/PlusAndMinusButton";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../../Redux/Slices/CartSlices/CartSlice";

interface ProductModalProps {
  handleClose: () => void;
  show: boolean;
  numberOfProducts: number;
  totalPrice: number;
  setNumberOfProducts: React.Dispatch<React.SetStateAction<number>>;
  product: ProductType;
}

const ProductModal = ({
  handleClose,
  show,
  numberOfProducts,
  setNumberOfProducts,
  totalPrice,
  product,
}: ProductModalProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    handleClose();
    dispatch(
      addProduct({
        product,
        totalPrice,
        quantityOfAllProducts: numberOfProducts,
      })
    );
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`${totalPrice.toFixed(2)} zł`}</Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <PlusAndMinusButton
            numberOfProducts={numberOfProducts}
            setNumberOfProducts={setNumberOfProducts}
          />
          <Button variant="primary" onClick={handleAddToCart}>
            "Dodaj produkt"
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductModal;
