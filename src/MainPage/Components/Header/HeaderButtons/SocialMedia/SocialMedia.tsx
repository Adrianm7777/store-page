import SocialMediaLinks from "./SocialMediaLinks";
import styles from "./SocialMedia.module.scss";

interface SocialMediaProps {
  isHidden?: boolean;
}

const SocialMedia = ({ isHidden }: SocialMediaProps) => {
  const classList = isHidden
    ? `${styles.socialMediaButtons} ${styles.hidden}`
    : styles.socialMediaButtons;

  return (
    <div className={classList}>
      {SocialMediaLinks.map((link) => (
        <a href={link.href} target="_blank" rel="noreferrer">
          <img src={link.imgSrc} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
