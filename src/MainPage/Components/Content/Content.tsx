import TopContainerImage from "./TopContainerImage/TopContainerImage";
import styles from "./Content.module.scss";

const Content = () => {
  return (
    <div className={styles.contentContainer}>
      <TopContainerImage />
    </div>
  );
};

export default Content;
