import Link from 'next/link';
import { AngleRight } from '~/src/components/icons';
import styles from './index.module.scss';

const NewsCardLatest = ({
  thumbnail,
  title,
  excerpt,
  url,
  postDate,
  listView,
  variant,
  postAuthor,
  postAuthorUri
}) => {
  return (
    <article
      className={`${styles.newscard} ${listView ? styles.newscard__list__tview : ''} ${
        variant == 'square' ? styles.newscard__variant__square : ''
        }`}>
      <Link href={`${url || '#'}`}>
        <a className={styles.newscard__thumbnail}>
          <img src={thumbnail} alt={title} />
        </a>
      </Link>

      <div className={styles.newscard__content}>
        {variant == 'square' && (
          <div className={styles.newscard__meta}>
            <span className={styles.newscard__meta__variant__sqare__date}>{postDate}</span>
          </div>
        )}

        <h3>
          <Link href={`${url || '#'}`}>
            <a>{title}</a>
          </Link>
        </h3>

        <div className={styles.newscard__meta}>
          <span className={styles.newscard__meta__date}>{postDate}</span>

          {postAuthor && (
            <Link href={`${postAuthorUri || '#'}`}>
              <a className={styles.newscard__meta__author}>{postAuthor || 'Admin'}</a>
            </Link>
          )}
        </div>

        {excerpt && <p>{excerpt}</p>}

        {url && (
          <Link href={`${url || '#'}`}>
            <a className={styles.newscard__readmore} aria-label={title}>
              Read more <AngleRight />
            </a>
          </Link>
        )}
      </div>
    </article>
  );
};

export default NewsCardLatest;
