import Breadcrumb from '~/src/components/common/Breadcrumb';
import ReleaseInfo from '~/src/components/common/ReleaseInfo';
import NewsWidget from '~/src/components/SingleNews/NewsWidget';
import SingleBrandProductCard from '~/src/components/common/SingleBrandProductCard';
import SectionHeading from '~/src/components/common/SectionHeading';
import { Nike } from '~/src/components/icons';

import styles from './index.module.scss';

const items = [
  {
    meDiaScr: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Lil_Nas_X_Satan_Shoes.png',
    title: 'Valentines Day Promotion 2021” Get 20% Off At Nike',
    uri: '#',
    dateTime: '10 February 2021',
    stockStatus: '',
    price: ''
  },
  {
    meDiaScr: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Lil_Nas_X_Satan_Shoes.png',
    title: 'Valentines Day Promotion 2021” Get 20% Off At Nike',
    uri: '#',
    dateTime: '10 February 2021',
    stockStatus: '',
    price: ''
  },

  {
    meDiaScr: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Lil_Nas_X_Satan_Shoes.png',
    title: 'Valentines Day Promotion 2021” Get 20% Off At Nike',
    uri: '#',
    dateTime: '10 February 2021',
    stockStatus: '',
    price: ''
  },

  {
    meDiaScr: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Lil_Nas_X_Satan_Shoes.png',
    title: 'Valentines Day Promotion 2021” Get 20% Off At Nike',
    uri: '#',
    dateTime: '10 February 2021',
    stockStatus: '',
    price: ''
  }
];

const RelatedItems = [
  {
    meDiaScr: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Lil_Nas_X_Satan_Shoes.png',
    title: 'Valentines Day Promotion 2021” Get 20% Off At Nike',
    uri: '#',
    dateTime: '',
    stockStatus: 'In Stock',
    price: '$100.00'
  },
  {
    meDiaScr: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Lil_Nas_X_Satan_Shoes.png',
    title: 'Valentines Day Promotion 2021” Get 20% Off At Nike',
    uri: '#',
    dateTime: '',
    stockStatus: 'In Stock',
    price: '$100.00'
  },

  {
    meDiaScr: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Lil_Nas_X_Satan_Shoes.png',
    title: 'Valentines Day Promotion 2021” Get 20% Off At Nike',
    uri: '#',
    dateTime: '',
    stockStatus: 'In Stock',
    price: '$100.00'
  },

  {
    meDiaScr: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Lil_Nas_X_Satan_Shoes.png',
    title: 'Valentines Day Promotion 2021” Get 20% Off At Nike',
    uri: '#',
    dateTime: '',
    stockStatus: 'In Stock',
    price: '$100.00'
  }
];

const SingleNews = () => {
  return (
    <>
      <div className="section-padding-bottom">
        <div className="row">
          <div className="columns">
            <Breadcrumb
              items={[{ label: 'News', uri: '#' }]}
              activePage="Sale on Nike Air Max Sneakers at Foot Locker"
            />
          </div>
        </div>
      </div>

      <div className="section-padding-bottom">
        <div className="row">
          <div className="columns medium-8 small-12">
            <div className={styles.news__details}>
              <div className={styles.news__details__featured__thumbnail}>
                <img
                  src="https://images.unsplash.com/photo-1546367564-ade1880f8921?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
                  alt="Sale on Nike Air Max Sneakers at Foot Locker"
                />
              </div>

              <h2 className={styles.news__details__title}>
                Sale on Nike Air Max Sneakers at Foot Locker
              </h2>

              <div className={styles.news__details__meta}>
                <span className={styles.news__details__meta__date__time}>Tue 16 Mar 2021 2pm</span>
                <a href="#" className={styles.news__details__meta__author}>
                  Admin
                </a>
              </div>

              <div className={styles.news__details__content}>
                <p>
                  Wake up sneaker hunters! There’s going to be a Sale on Nike Air Max Sneakers at
                  Foot Locker and you definitely don’t wanna miss this sassy Swoosh parade! This
                  entire lineup will include all the iconic and stylish Air Max trainers for running
                  and sports, while the colour palette range varies from dark to soft.
                </p>
                <p>
                  So, what’s the fuss about this sale? For starters, this offer is valid only from
                  26 February to 5th March. And all selected Swoosh kicks are 25% off!! In short,
                  this sale is your surefire way to score high this season. Follow us on @FastSoleUK
                  for further details on this Sale on Nike Air Max Sneakers at Foot Locker.
                </p>
                <p>
                  For now, here we have some handpicked <a href="#">Nike Air Max stunners</a> from
                  the sale.
                </p>

                <img src="https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80" />

                <h3>Nike Air Max 270 Black White (AH6789-001)</h3>
                <p>
                  An Orca colourway for the upcomign seasons sounds just fine! This Swoosh-master is
                  unmissable like all other vintae themes.
                </p>
                <p>
                  Wake up sneaker hunters! There’s going to be a Sale on Nike Air Max Sneakers at
                  Foot Locker and you definitely don’t wanna miss this sassy Swoosh parade! This
                  entire lineup will include all the iconic and stylish Air Max trainers for running
                  and sports, while the colour palette range varies from dark to soft.
                </p>

                <p>
                  So, what’s the fuss about this sale? For starters, this offer is valid only from
                  26 February to 5th March. And all selected Swoosh kicks are 25% off!! In short,
                  this sale is your surefire way to score high this season. Follow us on @FastSoleUK
                  for further details on this Sale on Nike Air Max Sneakers at Foot.
                </p>

                <ReleaseInfo
                  title="Nike Air Max 270 Black White (AH6789-001)"
                  date="Tue 16 Mar 2021 2pm GMT"
                  price="$100.00"
                  brand="Nike"
                  model="Air Jordan 1"
                  style="Nike Air Max Triax 96"
                  styleCode="554724-077"
                  color="Orange"
                  variant="outline"
                />

                <img src="https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80" />

                <h3>Nike Air Max 270 Black White (AH6789-001)</h3>
                <p>
                  An Orca colourway for the upcomign seasons sounds just fine! This Swoosh-master is
                  unmissable like all other vintae themes.
                </p>
                <p>
                  Wake up sneaker hunters! There’s going to be a Sale on Nike Air Max Sneakers at
                  Foot Locker and you definitely don’t wanna miss this sassy Swoosh parade! This
                  entire lineup will include all the iconic and stylish Air Max trainers for running
                  and sports, while the colour palette range varies from dark to soft.
                </p>

                <p>
                  So, what’s the fuss about this sale? For starters, this offer is valid only from
                  26 February to 5th March. And all selected Swoosh kicks are 25% off!! In short,
                  this sale is your surefire way to score high this season. Follow us on @FastSoleUK
                  for further details on this Sale on Nike Air Max Sneakers at Foot.
                </p>

                <ReleaseInfo
                  title="Nike Air Max 270 Black White (AH6789-001)"
                  date="Tue 16 Mar 2021 2pm GMT"
                  price="$100.00"
                  brand="Nike"
                  model="Air Jordan 1"
                  style="Nike Air Max Triax 96"
                  styleCode="554724-077"
                  color="Orange"
                  variant="outline"
                />
              </div>
            </div>
          </div>
          {/* end columns */}

          {/* sidebar */}
          <div className="columns medium-4 small-12">
            <div className="news__aside">
              <NewsWidget widgetTitle="Recent News" newsItems={items} />
              <NewsWidget widgetTitle="Related News" newsItems={items} />
              <NewsWidget widgetTitle="Related  Products" newsItems={RelatedItems} />
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding-bottom">
        <SectionHeading title="Top Brands" uri="#" />

        <div className="row">
          <SingleBrandProductCard
            thumbnail="https://via.placeholder.com/700x425"
            brandLogo={<Nike />}
            brandName="Nike"
            url="https://fastsole.co.uk/"
          />
          <SingleBrandProductCard
            thumbnail="https://via.placeholder.com/700x425"
            brandLogo={<Nike />}
            brandName="Nike"
            url="https://fastsole.co.uk/"
          />
          <SingleBrandProductCard
            thumbnail="https://via.placeholder.com/700x425"
            brandLogo={<Nike />}
            brandName="Nike"
            url="https://fastsole.co.uk/"
          />
          <SingleBrandProductCard
            thumbnail="https://via.placeholder.com/700x425"
            brandLogo={<Nike />}
            brandName="Nike"
            url="https://fastsole.co.uk/"
          />
        </div>
      </div>
    </>
  );
};

export default SingleNews;
