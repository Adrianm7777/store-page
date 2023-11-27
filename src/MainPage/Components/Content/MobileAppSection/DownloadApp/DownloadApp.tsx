import { useState } from "react";
import styles from "./DownloadApp.module.scss";
import Modal from "react-bootstrap/Modal";

interface MobileAppSectionProps {
  isHover: boolean;
}

const DownloadApp = ({ isHover }: MobileAppSectionProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center gap-3 w-50 ${styles.downloadAppContainer}`}
    >
      <div
        className={`d-flex align-items-center gap-3 ${styles.qrHeaderContainer}`}
      >
        <div className={styles.qrContainer}>
          <div
            className={`${styles.animationQr} ${isHover ? styles.hovered : ""}`}
          ></div>
          <img
            onClick={showModal}
            src="https://cdn.mcdonalds.pl/uploads/20230831110135/mcd-app-qr-png-icon.jpg"
          />
        </div>
        <div className={styles.qrContainerText}>
          <h2>Pobierz aplikację McDonald's</h2>
        </div>
      </div>
      <div className={styles.downloadAppText}>
        <p>
          Program MojeM Nagrody, wyjątkowe okazYEAH!
          <br /> i wiele innych atrakcji czeka na Ciebie w aplikacji!
        </p>
      </div>
      <div className={`d-flex gap-3 ${styles.appsStoresContainer}`}>
        <a>
          <img src="https://cdn.mcdonalds.pl/public/build/images/home/sections/appstore.ed7318c953882726842f814b7c5cfe43.png" />
        </a>
        <a>
          <img src="https://cdn.mcdonalds.pl/public/build/images/home/sections/googleplay.2eee13f33c5cc3cb2012a25ee9ca43fe.png" />
        </a>
      </div>
      {modalOpen && (
        <Modal
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={modalOpen}
          onHide={closeModal}
        >
          <Modal.Body>
            <img
              className="w-100 h-100 p-0 m-0"
              src="https://cdn.mcdonalds.pl/uploads/20230831110135/mcd-app-qr-png-icon.jpg"
            />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default DownloadApp;
