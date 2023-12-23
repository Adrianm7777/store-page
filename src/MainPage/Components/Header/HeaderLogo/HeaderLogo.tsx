import { Link } from "react-router-dom";
import styles from "./HeaderLogo.module.scss";

interface HeaderLogoProps {
  href: string;
  src: string;
}

const HeaderLogo = ({ href, src }: HeaderLogoProps) => {
  return (
    <div className={styles.logo}>
      <Link to={href}>
        <img src={src} />
      </Link>
    </div>
  );
};

export default HeaderLogo;
