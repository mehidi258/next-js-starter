import Link from 'next/link';
import styles from './newscard.module.scss';

const NewsCard = ({ thumbnail, title, excerpt, url }) => {
  return (
    <article className={styles.newscard}>
      <Link href={`${url}`}>
        <a className={styles.newscard_thumbnail}>
          <img src={thumbnail} alt={title} />
        </a>
      </Link>

      <div className={styles.newscard_content}>
        <h3>
          <Link href={`${url}`}>
            <a>{title}</a>
          </Link>
        </h3>

        <p>{excerpt}</p>
      </div>
    </article>
  );
};

export default NewsCard;
