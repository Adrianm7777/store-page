import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import HeaderSearch from "./HamburgerMenu/HeaderSearch/HeaderSearch";
import OverlayMenu from "./HamburgerMenu/OverlayMenu/OverlayMenu";
import HeaderButtons from "./HeaderButtons/HeaderButtons";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import styles from "./Header.module.scss";
import BackButton from "./BackButton/BackButton";
import CartShopping from "../../../OurMenuPage/Components/CartShopping/CartShopping";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (isNavExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isNavExpanded]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    //eslint-disable-next-line
  }, [window.scrollY]);

  const showNav = () => setIsNavExpanded((prevState) => !prevState);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={
        isScrolled ? `${styles.navBar} ${styles.headerScrolled}` : styles.navBar
      }
    >
      <Container
        fluid
        className="d-flex justify-content-between align-items-center p-3 "
      >
        {isNavExpanded && <OverlayMenu />}
        <BackButton />
        <HamburgerMenu
          showToggle={showNav}
          hamburgerImg={
            isNavExpanded
              ? "https://cdn.mcdonalds.pl/public/build/images/header/cross.3a24c73a7b5d1753c7f982abd8cf9a74.svg"
              : "https://cdn.mcdonalds.pl/public/build/images/header/friesMenu.bb2596583381aa0584fb120f7dbde079.svg"
          }
        />

        {isNavExpanded ? (
          <HeaderSearch />
        ) : (
          <HeaderLogo
            href={`/`}
            src="https://cdn.mcdonalds.pl/public/build/images/header/logo3.19d7d61fd29210afe458d0de4d0a7ca6.svg"
          />
        )}
        <HeaderButtons isNavOpen={isNavExpanded} />
        {location?.pathname === "/nasze-menu" && <CartShopping />}
      </Container>
    </Navbar>
  );
};
export default Header;
