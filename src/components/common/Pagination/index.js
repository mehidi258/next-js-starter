import { AngleRight, Previous, Next } from '~/src/components/icons';
import styles from './index.module.scss';

const Pagination = ({ pageCount, initialPage }) => {
  return (
    <div className={styles.pagination}>
      <ul>
        <li className={styles.pagination__first__page}>
          <a href="#">
            <Previous />
          </a>
        </li>
        <li className={styles.prev__page}>
          <a href="#">
            <AngleRight />
          </a>
        </li>
        <li className={styles.pagination__active}>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li className={styles.next__page}>
          <a href="#">
            <AngleRight />
          </a>
        </li>
        <li className={styles.pagination__last__page}>
          <a href="#">
            <Next />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
