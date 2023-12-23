import { useEffect, useState } from "react";
import DeliveryButton from "./DeliveryButton/DeliveryButton";
import styles from "./HeaderButtons.module.scss";
import SocialMedia from "./SocialMedia/SocialMedia";
import { useLocation } from "react-router-dom";

interface HeaderButtonsProps {
  isNavOpen: boolean;
}

const HeaderButtons = ({ isNavOpen }: HeaderButtonsProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [showButton, setShowButton] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setShowButton(location.pathname !== "/");
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div className={styles.buttonsHeader}>
      {!(isNavOpen && windowWidth <= 1200) && (
        <>
          <SocialMedia isHidden={true} />
          <DeliveryButton showButton={showButton} />
        </>
      )}
    </div>
  );
};

export default HeaderButtons;
