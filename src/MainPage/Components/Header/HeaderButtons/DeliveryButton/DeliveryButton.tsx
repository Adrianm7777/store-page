import { Link } from "react-router-dom";
import styles from "./DeliveryButton.module.scss";

interface DeliveryButtonProps {
  showButton: boolean;
}

const DeliveryButton = ({ showButton }: DeliveryButtonProps) => (
  <div className={showButton ? styles.buttonContainer : ""}>
    <div className={styles.deliveryButton}>
      <Link to={`mcdelivery`}>
        <p>ZAMÓW McDELIVERY®</p>
      </Link>
    </div>
    <div className={styles.deliveryScouter}>
      <Link to={`mcdelivery`}>
        <img src="https://cdn.mcdonalds.pl/public/build/images/icon/skuter.f6c2138dbdc54ac3d7a0775d8c574e43.svg" />
      </Link>
    </div>
  </div>
);

export default DeliveryButton;
