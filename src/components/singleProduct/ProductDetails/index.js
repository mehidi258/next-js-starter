import Breadcrumb from '~/src/components/common/Breadcrumb';
import WhereToBuy from '~/src/components/singleProduct/WhereToBuy';
import StockStatus from '~/src/components/common/StockStaus';
import ReleaseInfo from '~/src/components/common/ReleaseInfo';
import SingleProductCard from '~/src/components/common/SingleProductCard';
import SectionHeading from '~/src/components/common/SectionHeading';
import Image from '~/src/components/common/image';
import styles from './index.module.scss';

const sizes =
  '4  . 5  .  5.5  .  6  .  6.5  .  7  .  7.5  .  8  .  8.5  .  9  .  9.5  .  10  .  10.5  .  11  .  11.5  .  12  .  12.5  .  13  .  14  .  15  .  16  .  17';

const items = [
  { label: 'Brands', uri: '#' },
  { label: 'Nike', uri: '#' }
];

const ProductDetails = () => {
  return (
    <>
      <div className="section-padding-bottom">
        <div className="row">
          <div className="columns">
            <Breadcrumb
              items={items}
              activePage="Nike Legend Essential 2 Ashen Slate Crimson Tint Womens CQ9545-500"
            />
          </div>
        </div>
      </div>

      <section className={`${styles.product__details} section-padding-bottom`}>
        <div className="row">
          <div className="columns medium-7 small-12">
            <div className={styles.product__details__thumbnai}>
              {/* <Image
              sourceUrl={'https://via.placeholder.com/670x420'}
              alt="Nike Legend Essential 2 Ashen Slate Crimson Tint Womens CQ9545-500"
            /> */}
              <img src="https://via.placeholder.com/670x420" />
            </div>

            <div className={styles.product__details__content}>
              <h2 className={styles.product__details__content__title}>
                Nike Legend Essential 2 Ashen Slate Crimson Tint Womens CQ9545-500
              </h2>

              <div className={styles.product__details__meta}>
                <StockStatus stockInfo="In Stock" />
                <span>Release Date : Tue 16 Mar 2021 2pm GMT</span>
                <span>Style Code: CQ9545-500</span>
              </div>

              <span className={styles.product__details__price}>$100</span>

              <p>
                Take over the track with your moves in these ingenious new Nike trainers! The Nike
                Legend Essential 2 Ashen Slate Crimson Tint Womens is undoubtedly a pair that
                deserves to be on every sneaker shelf! So, get ready to add this beast to your stash
                by gearing up and making room on your shelf for the Legend Essential 2. If you’re
                new to the Swoosh world, these ultra-modern, comfy and stylish pair is perfect to
                start off your Nike collection with. Therefore, you better not waste another minute
                before gettin’ in the queue for this beast. If you’re too late for the shops when
                these kicks drop, you’ll be waitin’ for a very long time! To be the first to get all
                the latest sneaker town updates, join us at FastSoleUK.{' '}
              </p>

              <p>
                This pair, arriving as a women’s exclusive release, was designed while keeping every
                unique woman in mind. As a result, this legendary pair is perfect for all the ladies
                who love styling gaudy Nike trainers! The toned-down grey leather base keeps the
                look subtle and chic. However, the Crimson Tint on the Swoosh logo at the sides
                steals away all the attention! Similarly, the midsole also flaunts accents of the
                same palette seen on the Swoosh logo. This adds a slight pop of colour atop the
                crisp white midsole.
              </p>

              <p>
                When it comes to comfort, this pair will deliver the best, as it comes with
                cushioning tools that are fit for future tracks! Lace into these highly-coveted
                trainers and watch your strides transform and become unbeatable! You will be beating
                your opponents without fain while you have these utterly stylish and responsive
                kicks on foot!{' '}
              </p>

              <p>
                Lastly, the whole sneaker offers maximum traction atop slippery tracks through its
                rubber-textured outer sole. So, with the new Nike Legend Essential 2 Ashen Slate
                Crimson Tint Womens, you’ll be at ease and unstoppable all the time! Hurry up and
                get in line before the rest of the sneakerheads do! You can buy this sneaker from
                the select UK and European shops on 16th March. Meanwhile, check out the Nike ZoomX
                SuperRep Surge Crimson Bliss Womens.
              </p>
            </div>

            <ReleaseInfo
              title="All Release Info Nike legend essential"
              date="Tue 16 Mar 2021 2pm GMT"
              price="$100.00"
              brand="Nike"
              model="Air Jordan 1"
              style="Nike Air Max Triax 96"
              styleCode="554724-077"
              color="Orange"
            />
          </div>

          <div className="columns medium-5 small-12">
            <aside className={styles.product__details__aside}>
              <h3>Where to buy</h3>
              <WhereToBuy
                name="Nike"
                thumbnail="http://pngimg.com/uploads/nike/nike_PNG6.png"
                stockInfo="In Stock"
                price="$100.00"
                addToCart="#"
                sizes={sizes}
              />

              <WhereToBuy
                name="Addidas"
                thumbnail="http://pngimg.com/uploads/nike/nike_PNG6.png"
                stockInfo="Sold Out"
                price="$200.00"
                addToCart="#"
                buttonText="Visit website"
                sizes={sizes}
              />

              <WhereToBuy
                name="Puma"
                thumbnail="http://pngimg.com/uploads/nike/nike_PNG6.png"
                stockInfo="Coming Soon"
                price="$300.00"
                addToCart="#"
                sizes={sizes}
              />

              <WhereToBuy
                name="Converse"
                thumbnail="http://pngimg.com/uploads/nike/nike_PNG6.png"
                stockInfo="In Stock"
                price="$400.00"
                addToCart="#"
                sizes={sizes}
              />
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding-bottom">
        <SectionHeading title="You may also like" uri="#" />

        <div className="row">
          <SingleProductCard
            dateTime="20 Feb 2021 8:00 AM GMT"
            mediaSrc="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-8906819/eagle_eagle_hybrid_sepatu_lari_pria_wanita_running_shoes_unisex_full01_hcqrpnic.jpg"
            stockInfo="In Stock"
            title="Nike Air Structure Triax 91 Neo Black CV3492-100"
            price="$100.00"
            url="#"
          />

          <SingleProductCard
            dateTime="20 Feb 2021 8:00 AM GMT"
            mediaSrc="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-8906819/eagle_eagle_hybrid_sepatu_lari_pria_wanita_running_shoes_unisex_full01_hcqrpnic.jpg"
            stockInfo="In Stock"
            title="Nike Air Structure Triax 91 Neo Black CV3492-100"
            price="$100.00"
            url="#"
          />

          <SingleProductCard
            dateTime="20 Feb 2021 8:00 AM GMT"
            mediaSrc="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-8906819/eagle_eagle_hybrid_sepatu_lari_pria_wanita_running_shoes_unisex_full01_hcqrpnic.jpg"
            stockInfo="Coming Soon"
            title="Nike Air Structure Triax 91 Neo Black CV3492-100"
            price="$100.00"
            url="#"
          />

          <SingleProductCard
            dateTime="20 Feb 2021 8:00 AM GMT"
            mediaSrc="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-8906819/eagle_eagle_hybrid_sepatu_lari_pria_wanita_running_shoes_unisex_full01_hcqrpnic.jpg"
            stockInfo="Coming Soon"
            title="Nike Air Structure Triax 91 Neo Black CV3492-100"
            price="$100.00"
            url="#"
          />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
