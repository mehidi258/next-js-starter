import styles from './index.module.scss';

const ProductCategoryBox = ({ thumbnail, name, uri }) => {
  return (
    <div className={styles.product__ctg}>
      <figure className={styles.product__ctg__thumbnail}>
        <img src={thumbnail} alt={name} />
        <figcaption className={styles.product__ctg__name}>
          <a href={`${uri}`} className="btn btn--white">
            {name}
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

export default ProductCategoryBox;
