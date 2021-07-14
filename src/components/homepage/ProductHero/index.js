import Link from 'next/link';
import StockStaus from '~/src/components/common/StockStaus';
import { InStock, ComingSoon, SoldOut } from '~/src/components/icons';

import Image from '~/src/components/common/image';

import styles from './index.module.scss';

const ProductHero = ({ thumbnail, stockInfo, title, excerpt, url, addToCart, listView }) => {
  return (
    <div className={`${styles.product} ${listView ? styles.product_listview : ''}`}>
      <Link href={`${url}`}>
        <a className={styles.product_thumb}>
          <Image sourceUrl={thumbnail} alt={title} />
        </a>
      </Link>

      <div className={styles.product_body}>
        <h3 className={styles.product_title}>
          <Link href={`${url}`}>
            <a>{title}</a>
          </Link>
        </h3>

        <p>{excerpt}</p>

        <div className={styles.product_meta}>
          <StockStaus stockInfo={stockInfo} />

          <div className={styles.product_price}>
            <span className={styles.product_regular_price}>$30.99</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
