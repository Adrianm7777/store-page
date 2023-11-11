import styles from "./HamburgerMenu.module.scss";

interface hamburgerMenuProps {
  showToggle: () => void;
  hamburgerImg: string;
}

const HamburgerMenu = ({ showToggle, hamburgerImg }: hamburgerMenuProps) => {
  return (
    <div className={styles.hamburgerContainer}>
      <div className={styles.hamburgerIcon} onClick={showToggle}>
        <img src={hamburgerImg} />
      </div>
    </div>
  );
};

export default HamburgerMenu;
