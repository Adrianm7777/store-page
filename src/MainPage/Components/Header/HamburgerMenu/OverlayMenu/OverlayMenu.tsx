import SocialMedia from "../../HeaderButtons/SocialMedia/SocialMedia";
import styles from "./OverlayMenu.module.scss";
import { ListGroup } from "react-bootstrap";

const OverlayMenu = () => (
  <div
    className={`position-fixed d-flex justify-content-center align-items-center vw-100 h-100 z-index-999 ${styles.navBarWrapper}`}
  >
    <ListGroup variant="flush" className="w-100">
      <ListGroup.Item
        action
        href="/"
        className={`d-flex justify-content-center align-items-center ${styles.navBarItem}`}
      >
        <p>Strona główna</p>
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="/nasze-menu"
        className={`d-flex justify-content-center align-items-center ${styles.navBarItem}`}
      >
        <p>Nasze menu</p>
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="#app"
        className={`d-flex justify-content-center align-items-center ${styles.navBarItem}`}
      >
        <p>Aplikacja McDonald's</p>
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="#restaurants"
        className={`d-flex justify-content-center align-items-center ${styles.navBarItem}`}
      >
        <p>Restauracje</p>
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="#delivery"
        className={`d-flex justify-content-center align-items-center ${styles.navBarItem}`}
      >
        <p>McDelivery</p>
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="#family"
        className={`d-flex justify-content-center align-items-center ${styles.navBarItem}`}
      >
        <p>Dla rodziny</p>
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="#about"
        className={`d-flex justify-content-center align-items-center ${styles.navBarItem}`}
      >
        <p>O McDonald's</p>
      </ListGroup.Item>
    </ListGroup>
    <div className={styles.socialMediaOverlay}>
      <SocialMedia isHidden={false} />
    </div>

    <div className={styles.cutLogo}>
      <img src="https://cdn.mcdonalds.pl/public/build/images/header/cutlogo.752b4ab2ec4443885baa80dd8915d01f.svg" />
    </div>
  </div>
);

export default OverlayMenu;
