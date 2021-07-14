import React, { useState } from 'react';
import MultiRangeSlider from '~/src/components/brandsArchive/MultiRangeSlider';
import { AngleRight } from '~/src/components/icons';
import styles from './index.module.scss';

const PriceRangeWidget = ({ title, minValue, maxValue }) => {
  let [toggleBtn, setToggleBtn] = useState(true);

  const handleToggleBtn = () => {
    setToggleBtn((toggleBtn = !toggleBtn));
  };

  return (
    <div
      className={`${styles.filters__aside__widget} ${
        toggleBtn ? styles.filters__aside__widget__expand : ''
      }`}>
      <div className={styles.filters__aside__widget__heading}>
        <h3>{title}</h3>

        <button
          className={`${styles.filters__toggle__btn} btn--no-style`}
          onClick={handleToggleBtn}>
          <AngleRight />
        </button>
      </div>

      <div className={styles.price__range__filter}>
        <MultiRangeSlider min={0} max={1000} />
      </div>
    </div>
  );
};

export default PriceRangeWidget;
