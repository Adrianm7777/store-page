import styles from "./HeaderSearch.module.scss";

const HeaderSearch = () => (
  <div className={styles.logoSearch}>
    <div className={styles.searchInput}>
      <input type="search" />
    </div>
    <button>
      <img src="https://cdn.mcdonalds.pl/public/build/images/header/search.eacc793fe631136e667b2c01151dfe7a.svg" />
    </button>
  </div>
);

export default HeaderSearch;
