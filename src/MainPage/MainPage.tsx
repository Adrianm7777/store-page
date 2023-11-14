import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import styles from "./MainPage.module.scss";

const MainPage = () => (
  <div className={styles.mainPageContainer}>
    <Header />
    <Content />
  </div>
);

export default MainPage;
