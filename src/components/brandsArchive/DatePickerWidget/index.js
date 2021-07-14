import React, { useState, useEffect } from 'react';
import DatePicker from '~/src/components/brandsArchive/DatePicker';
import { AngleRight } from '~/src/components/icons';
import styles from './index.module.scss';

const DatePickerWidget = ({ title }) => {
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
      <div className={styles.date__picker__wrap}>
        <DatePicker />
      </div>
    </div>
  );
};

export default DatePickerWidget;
