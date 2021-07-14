import Link from 'next/link';
import styles from './index.module.scss';

const DiscountCard = ({ mediaSrc, title, startDate, endDate, uri }) => {
  return (
    <div className={styles.discount__card}>
      <figure>
        <Link href={`${uri || '#'}`}>
          <a className={styles.discount__card__thumbnail}>
            <img src={mediaSrc} alt={title || ''} />
          </a>
        </Link>

        <figcaption>
          <h3 className={styles.discount__card__title}>
            <Link href={`${uri || '#'}`}>
              <a>{title || ''}</a>
            </Link>
          </h3>

          <span className={styles.discount__card__date}>
            {startDate} - {endDate}
          </span>
        </figcaption>
      </figure>
    </div>
  );
};

export default DiscountCard;
