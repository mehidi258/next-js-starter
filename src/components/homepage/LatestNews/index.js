import SectionHeading from '~/src/components/common/SectionHeading';
import NewsCardLatest from '~/src/components/common/NewsCardLatest';

import styles from './index.module.scss';

const LatestNews = () => {
  return (
    <section className={styles.fastsole_latestnews_wrap}>
      <SectionHeading title="Latest News" url="#" />

      <div className="row">
        <div className="columns small-12 medium-5">
          <NewsCardLatest
            thumbnail="https://via.placeholder.com/700x375"
            title="On Feet Images Of The Upcoming Nike Dunk Low “Free 99 Pack"
            url="#"
            postDate="25 May, 2020"
          />
        </div>

        <div className="columns small-12 medium-7">
          <NewsCardLatest
            thumbnail="https://via.placeholder.com/230x150"
            listView={true} // except boolean value
            title="On Feet Images Of The Upcoming Nike Dunk Low “Free 99 Pack"
            url="#"
            postDate="25 May, 2020"
          />

          <NewsCardLatest
            thumbnail="https://via.placeholder.com/230x150"
            listView={true} // except boolean value
            title="LEGO Joins adidas For Six New ZX 8000 “Colour Pack” In 2021"
            url="#"
            postDate="25 May, 2020"
          />

          <NewsCardLatest
            thumbnail="https://via.placeholder.com/230x150"
            listView={true} // except boolean value
            title="The “Nike Air Max 95 NDSTRKT” Is Shining In Black"
            url="#"
            postDate="25 May, 2020"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
