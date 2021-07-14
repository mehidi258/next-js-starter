import React, { useState, useEffect } from 'react';
import Checkbox from '~/src/components/common/Checkbox';
import { AngleRight } from '~/src/components/icons';
import styles from './index.module.scss';

const ColorsWidget = ({ title, items }) => {
  let [toggleBtn, setToggleBtn] = useState(true);

  const handleToggleBtn = () => {
    setToggleBtn((toggleBtn = !toggleBtn));
  };

  const handleChange = (e) => {
    console.log(e.target.value);
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
        <Checkbox
          label="In Stock"
          name="test1"
          value="1"
          onChange={handleChange}
          bgColor="#EFF4F1"
        />

        <Checkbox
          label="Sold Out"
          name="test2"
          value="2"
          onChange={handleChange}
          bgColor="#46484D"
        />

        <Checkbox
          label="Sold Out"
          name="test3"
          value="3"
          onChange={handleChange}
          bgColor="#FEBE15"
        />

        <Checkbox
          label="Sold Out"
          name="test4"
          value="4"
          onChange={handleChange}
          bgColor="#55E4F8"
        />

        <Checkbox
          label="Sold Out"
          name="test5"
          value="Five"
          onChange={handleChange}
          bgColor="#43B0FF"
        />

        <Checkbox
          label="Sold Out"
          name="test6"
          value="6"
          onChange={handleChange}
          bgColor="#E289F0"
        />

        <Checkbox
          label="Sold Out"
          name="test7"
          value="7"
          onChange={handleChange}
          bgColor="#F83C3C"
        />

        <Checkbox
          label="Sold Out"
          name="test8"
          value="8"
          onChange={handleChange}
          bgColor="#FACD2D"
        />

        <Checkbox
          label="Sold Out"
          name="test9"
          value="9"
          onChange={handleChange}
          bgColor="#3F66CC"
        />

        <Checkbox
          label="Sold Out"
          name="test10"
          value="10"
          onChange={handleChange}
          bgColor="#AB6CFB"
        />

        <Checkbox
          label="Sold Out"
          name="test11"
          value="11"
          onChange={handleChange}
          bgColor="#C1F552"
        />

        <Checkbox
          label="Sold Out"
          name="test12"
          value="12"
          onChange={handleChange}
          bgColor="#EE5DBD"
        />
      </form>
    </div>
  );
};

export default ColorsWidget;
