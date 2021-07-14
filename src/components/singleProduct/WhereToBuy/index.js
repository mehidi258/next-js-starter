import Link from 'next/link';
import Image from '~/src/components/common/image';
import StockStatus from '~/src/components/common/StockStaus';
import styles from './index.module.scss';

const WhereBuy = ({
  name,
  thumbnail,
  mediaSrc,
  stockInfo,
  price,
  addToCart,
  buttonText,
  sizes
}) => {
  const handleBtnText = () => {
    if (stockInfo === 'In Stock') {
      return 'btn--default';
    } else if (stockInfo === 'Sold Out') {
      return 'btn--warning';
    } else if (stockInfo === 'Coming Soon') {
      return 'btn--info';
    }
  };

  return (
    <div className={styles.buy__product}>
      <div className={styles.buy__product__brand}>
        <div className={styles.buy__product__brand__details}>
          <Link href="/">
            <a className={styles.buy__product__brand__details__thumb}>
              {/* <Image sourceUrl={thumbnail} altText={name} /> */}
              <img src="http://pngimg.com/uploads/nike/nike_PNG6.png" alt="nike" />
            </a>
          </Link>

          <div className={styles.buy__product__brand__title}>
            <h4>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h4>

            <StockStatus stockInfo={stockInfo} />
          </div>
        </div>

        <div className={styles.buy__product__brand__cart}>
          <span className={styles.buy__product__brand__cart__price}>{price}</span>
          <Link href={`${addToCart}`}>
            <a className={`btn ${handleBtnText()}`}>{buttonText || 'Buy Now'}</a>
          </Link>
        </div>
      </div>

      <div className={styles.buy__product__sizes}>
        <strong>Size: </strong>
        {sizes}
      </div>
    </div>
  );
};

export default WhereBuy;
