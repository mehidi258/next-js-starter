import styles from './index.module.scss';

const CategoryFilter = ({ ctgFilters }) => {
  return (
    <>
      <ul className={styles.category__filters}>
        <li>
          <a href="#">Asics</a>
        </li>

        <li>
          <a href="#">Jordan</a>
        </li>

        <li>
          <a href="#">Nike jordan</a>
        </li>

        <li>
          <a href="#">Ultra boost</a>
        </li>

        <li>
          <a href="#">Asics GEl LYTE 1111</a>
        </li>
      </ul>
    </>
  );
};

export default CategoryFilter;
