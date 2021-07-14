import React, { useState } from 'react';
import { Plus, Minus } from '~/src/components/icons';
import styles from './index.module.scss';

const Accordion = ({ accordionItems }) => {
  const [active, setActive] = useState(0);

  // handle active accordion element
  const handleActiveAccordion = (e, index) => {
    e.preventDefault();
    setActive(index);
  };

  return (
    <>
      {accordionItems.map(({ title, description }, index) => (
        <div key={index} className={styles.accordion}>
          <span className={styles.accordion__icon} onClick={(e) => handleActiveAccordion(e, index)}>
            {active === index ? <Minus /> : <Plus />}
          </span>

          <div className={styles.accordion__inner}>
            <h3
              onClick={(e) => handleActiveAccordion(e, index)}
              className={styles.accordion__title}>
              {title}
            </h3>

            <div
              className={`${styles.accordion__body} ${
                active === index ? styles.accordion__body__open : styles.accordion__body__close
              }`}>
              {description}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
