import styles from './index.module.scss';

const ReleaseInfo = ({ title, date, price, brand, model, style, styleCode, color, variant }) => {
  return (
    <div className={`${styles.release__infos} ${variant ? styles.release__infos__outline : ''}`}>
      <h3 className={styles.release__infos__tilte}>{title || ''}</h3>
      <span className={styles.release__infos__item}>
        <strong>Release Date: </strong>
        {date || ''}
      </span>
      <span className={styles.release__infos__item}>
        <strong>Price: </strong>
        {price || ''}
      </span>
      <span className={styles.release__infos__item}>
        <strong>Brand: </strong>
        {brand || ''}
      </span>
      <span className={styles.release__infos__item}>
        <strong>Model: </strong>
        {model || ''}
      </span>
      <span className={styles.release__infos__item}>
        <strong>Style: </strong>
        {style || ''}
      </span>
      <span className={styles.release__infos__item}>
        <strong>Style Code: </strong>
        {styleCode || ''}
      </span>
      <span className={styles.release__infos__item}>
        <strong>Color: </strong>
        {color || ''}
      </span>
    </div>
  );
};

export default ReleaseInfo;
