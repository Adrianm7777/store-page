import { useEffect, useState } from "react";
import DeliveryButton from "./DeliveryButton/DeliveryButton";
import styles from "./HeaderButtons.module.scss";
import SocialMedia from "./SocialMedia/SocialMedia";

interface HeaderButtonsProps {
  isNavOpen?: boolean;
}

const HeaderButtons = ({ isNavOpen }: HeaderButtonsProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
          <DeliveryButton />
        </>
      )}
    </div>
  );
};

export default HeaderButtons;
