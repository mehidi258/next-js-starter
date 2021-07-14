import React, { useState, useEffect } from 'react';
import DatePickerWidget from '~/src/components/brandsArchive/DatePickerWidget';
import PriceRangeWidget from '~/src/components/brandsArchive/PriceRangeWidget';
import FilterWidget from '~/src/components/brandsArchive/FilterWidget';
import ColorsWidget from '~/src/components/brandsArchive/ColorsWidget';
import { Reset, Close, Filter } from '~/src/components/icons';

import styles from './index.module.scss';

const ArcheveSidebar = () => {
  let [toggleBtn, setToggleBtn] = useState(false);

  const handleToggleBtn = () => {
    setToggleBtn((toggleBtn = !toggleBtn));
  };

  return (
    <>
      <button
        className={`btn--no-style ${styles.filters__aside__toggle}`}
        onClick={handleToggleBtn}>
        <Filter />
      </button>

      <div className={`${styles.filters__aside} ${toggleBtn ? styles.filters__aside__open : ''}`}>
        <div className={styles.filters__aside__inner}>
          <div className={styles.filters__aside__heading}>
            <span className={styles.filters__aside__heading__title}>Filter</span>
            <button className="btn--no-style" onClick={handleToggleBtn}>
              <Close />
            </button>
          </div>

          <DatePickerWidget title="Release calender" />

          <FilterWidget
            title="Stock"
            items={[{ label: 'In Stock' }, { label: 'Coming Soon' }, { label: 'Sold Out' }]}
          />

          <FilterWidget
            title="Stock"
            items={[{ label: 'In Stock' }, { label: 'Coming Soon' }, { label: 'Sold Out' }]}
          />

          <FilterWidget
            title="Stock"
            items={[{ label: 'In Stock' }, { label: 'Coming Soon' }, { label: 'Sold Out' }]}
          />

          <FilterWidget
            title="Stock"
            items={[{ label: 'In Stock' }, { label: 'Coming Soon' }, { label: 'Sold Out' }]}
          />

          <ColorsWidget
            title="Colors"
            items={[{ label: 'In Stock' }, { label: 'Coming Soon' }, { label: 'Sold Out' }]}
          />

          <PriceRangeWidget title="Price Range" />

          <div className={`${styles.filters__aside__widget} mt-70`}>
            <button type="reset" className="btn">
              <Reset />
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArcheveSidebar;
