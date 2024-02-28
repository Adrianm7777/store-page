import { useState } from "react";
import styles from "./PlusAndMinusButton.module.scss";

interface PlusAndMinusButtonProps {
  price: number;
  numberOfProducts: number;
  totalPrice: number;
  setNumberOfProducts: React.Dispatch<React.SetStateAction<number>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

const PlusAndMinusButton = ({
  price,
  numberOfProducts,
  setNumberOfProducts,
  setTotalPrice,
  totalPrice,
}: PlusAndMinusButtonProps) => {
  const addProduct = () => {
    setNumberOfProducts((prevState) => prevState + 1);
    setTotalPrice(totalPrice + price);
  };
  const removeProduct = () => {
    if (numberOfProducts > 0) {
      setNumberOfProducts((prevState) => prevState - 1);
      setTotalPrice(totalPrice - price);
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
