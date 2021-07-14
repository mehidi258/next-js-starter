import React, { useState, useEffect } from 'react';
import Checkbox from '~/src/components/common/Checkbox';
import { AngleRight } from '~/src/components/icons';
import styles from './index.module.scss';

const FilterWidget = ({ title, items }) => {
  let [toggleBtn, setToggleBtn] = useState(true);

  const handleToggleBtn = () => {
    setToggleBtn((toggleBtn = !toggleBtn));
  };

  // const item = items.map((label) => {
  //   <Checkbox label={label || ''} />;
  // });

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

      <form>
        <Checkbox label="In Stock" />
        <Checkbox label="Coming Soon" />
        <Checkbox label="Sold Out" />
      </form>
    </div>
  );
};

export default FilterWidget;
