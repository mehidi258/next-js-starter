import Breadcrumb from '~/src/components/common/Breadcrumb';
import styles from './index.module.scss';

const PageHeading = ({
  title,
  mediaSrc,
  mediaWidth,
  mediaHeight,
  breadcrumbItems,
  breadcrumbActive
}) => {
  return (
    <>
      <div className={styles.page__heading}>
        <div className="row">
          <div className="columns small-12 text-center">
            {mediaSrc && (
              <img
                className={styles.page__heading__thumbnail}
                src={mediaSrc}
                alt={title || ''}
                width={mediaWidth || ''}
                height={mediaHeight || ''}
              />
            )}

            {title && <h2 className={styles.page__heading__title}>{title}</h2>}

            {breadcrumbItems && (
              <Breadcrumb items={breadcrumbItems} activePage={breadcrumbActive} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeading;
