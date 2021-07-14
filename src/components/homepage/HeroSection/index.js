import NewsCard from '~/src/components/common/NewsCard';
import ProductHero from '~/src/components/homepage/ProductHero';

import styles from './index.module.scss';

const HeroSection = () => {
  return (
    <section className={styles.fastsole_hero_wrap}>
      <div className="row">
        <div className="columns medium-6 small-12">
          <NewsCard
            thumbnail="https://via.placeholder.com/570x300"
            title="These Nike Air Force 1 Gore-Tex Sneakers Are Now on Sale!"
            excerpt="This particular model comes donning a Neo Black, teal blue, and laser red colour scheme. When you take a closer look, the first thing you’ll notice is the vibrant accent of teal blue from the Nike."
            url="#"
          />
        </div>

        <div className="columns medium-6 small-12">
          <ProductHero
            thumbnail="https://freepngimg.com/thumb/categories/627.png"
            stockInfo="In Stock"
            title="Air Jordan 1 Mid White University Gold...."
            excerpt="The Nike Air More Uptempo brings OG basketball funk back..."
            url="#"
            listView={true} // except boolean value
          />

          <ProductHero
            thumbnail="https://freepngimg.com/thumb/categories/627.png"
            stockInfo="Coming Soon"
            title="Air Jordan 1 Mid White University Gold...."
            excerpt="The Nike Air More Uptempo brings OG basketball funk back..."
            url="#"
            listView={true} // except boolean value
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
