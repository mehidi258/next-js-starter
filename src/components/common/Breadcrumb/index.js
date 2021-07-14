import React from 'react';
import PropTypes from 'prop-types';

import BreadcrumbItem from './Item';
import styles from './index.module.scss';

const Breadcrumb = ({ items, activePage }) => {
  return (
    <ul className={styles.breadcrumb}>
      {/* Home is default */}
      <BreadcrumbItem label={'Home'} uri={'/'} />
      {items && items.length
        ? items.map(({ label, uri }) => (
            <BreadcrumbItem label={label || ''} uri={uri || '#'} key={label} />
          ))
        : null}

      {activePage && (
        <li>
          <span>{activePage}</span>
        </li>
      )}
    </ul>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.array,
  activePage: PropTypes.string
};

Breadcrumb.defaultProps = {
  items: [],
  activePage: ''
};

export default Breadcrumb;
