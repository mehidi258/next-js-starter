import Link from 'next/link';
// Component-level styling
import style from './brandcard.module.scss';

const SingleBrandProductCard = ({ thumbnail, brandLogo, brandName, url }) => {
  return (
    <div className="columns large-3 medium-3 small-6">
      <div className={style.single_brand_product_box}>
        <img src={thumbnail} alt="" />

        <div className={style.info_card}>
          <div className={style.logo}>{brandLogo}</div>
          <Link href={url}>
            <a>{brandName}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBrandProductCard;
