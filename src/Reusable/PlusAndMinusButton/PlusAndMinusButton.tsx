import styles from "./PlusAndMinusButton.module.scss";

interface PlusAndMinusButtonProps {
  numberOfProducts: number;
  setNumberOfProducts: React.Dispatch<React.SetStateAction<number>>;
}

const PlusAndMinusButton = ({
  numberOfProducts,
  setNumberOfProducts,
}: PlusAndMinusButtonProps) => {
  const addProduct = () => {
    setNumberOfProducts((prevState) => prevState + 1);
  };
  const removeProduct = () => {
    if (numberOfProducts > 1) {
      setNumberOfProducts((prevState) => prevState - 1);
    }
  };

  return (
    <div
      className={`d-flex justify-content-between align-items-center w-25 ${styles.buttonsContainer}`}
    >
      <button onClick={removeProduct}>
        <i className="bi bi-dash-circle"></i>
      </button>

      {numberOfProducts}
      <button onClick={addProduct}>
        <i className="bi bi-plus-circle"></i>
      </button>
    </div>
  );
};

export default PlusAndMinusButton;
