/**
 * External dependecies
 */
import Link from 'next/link';
import PropTypes from 'prop-types';

/**
 * Internal dependecies
 */
import Styles from './index.module.scss';

const SectionHeading = ({ title, uri }) => {
  return (
    <div className={`row mb-30 align-middle ${Styles.section_heading}`}>
      <div className="columns">
        <h2 className="mt-0 mb-0">{title || ''}</h2>
      </div>

      {uri && (
        <div className="columns text-right">
          <Link href={`${uri}`}>
            <a className="btn btn--outline">View All</a>
          </Link>
        </div>
      )}
    </div>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string,
  uri: PropTypes.string
};

SectionHeading.defaultProps = {
  title: '',
  uri: '#'
};

export default SectionHeading;
