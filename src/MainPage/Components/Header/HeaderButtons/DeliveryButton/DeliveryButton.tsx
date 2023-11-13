import styles from "./DeliveryButton.module.scss";

const DeliveryButton = () => (
  <>
    <div className={styles.deliveryButton}>
      <a href="mcdelivery">
        <p>ZAMÓW McDELIVERY®</p>
      </a>
    </div>
    <div className={styles.deliveryScouter}>
      <a href="mcdelivery">
        <img src="https://cdn.mcdonalds.pl/public/build/images/icon/skuter.f6c2138dbdc54ac3d7a0775d8c574e43.svg" />
      </a>
    </div>
  </>
);

export default DeliveryButton;
