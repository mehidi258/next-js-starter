import Link from 'next/link';
import StockStatus from '~/src/components/common/StockStaus';

import styles from './index.module.scss';

const NewsWidget = ({ widgetTitle, newsItems }) => {
  const item = newsItems.map(({ meDiaScr, title, uri, dateTime, stockStatus, price }, index) => (
    <div className={styles.news__aside__widget__item} key={index}>
      <Link href={`${uri || ''}`}>
        <a className={styles.news__aside__widget__item__thumbnail}>
          <img src={meDiaScr} alt={title || ''} />
        </a>
      </Link>
      <div className={styles.news__aside__widget__item__details}>
        <h4>
          <Link href={`${uri || ''}`}>
            <a>{title || ''}</a>
          </Link>
        </h4>

        <div className={styles.news__aside__widget__item__meta}>
          {dateTime && (
            <span className={styles.news__aside__widget__item__meta__datetime}>
              {dateTime || ''}
            </span>
          )}

          {stockStatus && (
            <>
              <StockStatus stockInfo={stockStatus} />
              <span className={styles.news__aside__widget__item__meta__price}>{price || ''}</span>
            </>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <div className={styles.news__aside__widget}>
      <h3 className={styles.news__aside__widget__title}>{widgetTitle || ''}</h3>
      {item}
    </div>
  );
};

export default NewsWidget;
