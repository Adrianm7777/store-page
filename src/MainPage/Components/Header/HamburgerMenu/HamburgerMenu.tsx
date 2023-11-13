import styles from "./HamburgerMenu.module.scss";

interface HamburgerMenuProps {
  showToggle: () => void;
  hamburgerImg: string;
}

const HamburgerMenu = ({ showToggle, hamburgerImg }: HamburgerMenuProps) => (
  <div className={styles.hamburgerContainer}>
    <div className={styles.hamburgerIcon} onClick={showToggle}>
      <img src={hamburgerImg} />
    </div>
  </div>
);

export default HamburgerMenu;
