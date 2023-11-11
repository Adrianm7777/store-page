import styles from "./HeaderLogo.module.scss";

interface HeaderLogoProps {
  href?: string;
  src?: string;
}

const HeaderLogo = ({ href, src }: HeaderLogoProps) => {
  return (
    <div className={styles.logo}>
      <a href={href}>
        <img src={src} />
      </a>
    </div>
  );
};

export default HeaderLogo;
