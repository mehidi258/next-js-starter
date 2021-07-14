import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './index.module.scss';

const BreadcrumbItem = ({ label, uri }) => {
  if (!label || !uri) {
    return null;
  }

  return (
    <li>
      <Link href={uri || '#'}>{label || ''}</Link>
      <span className={styles.delimiter}>&rsaquo;</span>
    </li>
  );
};

BreadcrumbItem.propTypes = {
  label: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired
};

export default BreadcrumbItem;
