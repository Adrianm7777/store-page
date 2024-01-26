import SocialMediaLinks from "./SocialMediaLinks.consts";
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
      {SocialMediaLinks.map(({ href, id, imgSrc }) => (
        <a href={href} target="_blank" rel="noreferrer" key={id}>
          <img src={imgSrc} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
