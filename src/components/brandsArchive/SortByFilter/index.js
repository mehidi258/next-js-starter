import styles from './index.module.scss';

const SortByFilter = ({ sortItems }) => {
  return (
    <>
      <div className={styles.sort__filter}>
        <select>
          <option value="20">Sort by</option>
          <option value="low">Price (Low {'>'} High)</option>
          <option value="high">Price (Low {'>'} High)</option>
        </select>
      </div>
    </>
  );
};

export default SortByFilter;
