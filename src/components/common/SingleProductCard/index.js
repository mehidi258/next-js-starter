import Link from 'next/link';
import StockStaus from '~/src/components/common/StockStaus';
import style from './index.module.scss';

const SingleProductCard = ({
  classNames,
  dateTime,
  mediaSrc,
  stockInfo,
  title,
  price,
  url,
  btnUrl
}) => {
  return (
    <div className={classNames || 'columns large-3 medium-4 small-6'}>
      <div className={style.product}>
        <time>{dateTime || ''}</time>
        <div className={style.product__thumbnail}>
          <Link href={`${url || '#'}`}>
            <a>
              <img src={mediaSrc || ''} alt={title || ''} />
            </a>
          </Link>
        </div>

        <StockStaus stockInfo={stockInfo} />

        <h3 className={style.product__title}>
          <Link href={`${url || '#'}`}>
            <a>{title || ''}</a>
          </Link>
        </h3>

        <div className={style.product__price}>
          <span className={style.product__price__regular}>{price || ''}</span>
          {/* <span className={style.product__price__offer}>$100.00</span> */}
        </div>

        {btnUrl && (
          <Link href={`${btnUrl || '#'}`}>
            <a className="btn btn--outline btn--block">Buy Now</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SingleProductCard;
