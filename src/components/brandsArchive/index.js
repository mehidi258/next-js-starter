import PageHeading from '~/src/components/common/PageHeading';
import ProductCategoryBox from '~/src/components/brandsArchive/ProductCategoryBox';
import CategoryFilter from '~/src/components/brandsArchive/CategoryFilter';
import SortByFilter from '~/src/components/brandsArchive/SortByFilter';
import BrandArchiveSidebar from '~/src/components/brandsArchive/BrandArchiveSidebar';
import Pagination from '~/src/components/common/Pagination';
import SingleProductCard from '~/src/components/common/SingleProductCard';
import SectionHeading from '~/src/components/common/SectionHeading';
import NewsCardLatest from '~/src/components/common/NewsCardLatest';
import ReadMoreText from '~/src/components/common/ReadMoreText';

import styles from './index.module.scss';

const breadcrumbItems = [{ label: 'Brands', uri: '#' }];

const BrandArchive = () => {
  return (
    <>
      <div className="section-padding-bottom">
        <PageHeading
          title="Nike"
          mediaSrc="http://pngimg.com/uploads/nike/nike_PNG6.png"
          mediaWidth="100"
          mediaHeight="60"
          breadcrumbItems={breadcrumbItems}
          breadcrumbActive="Nike"
        />
      </div>
      {/* end: page heading */}

      <div className="section-padding-bottom">
        <div className="row">
          <div className="columns medium-4 small-12 mb-30">
            <ProductCategoryBox
              thumbnail="https://static-01.daraz.com.bd/p/b42835b4dc119aac2d45c4cdf15b1d85.jpg"
              name="Air Force 1"
              uri="#"
            />
          </div>

          <div className="columns medium-4 small-12 mb-30">
            <ProductCategoryBox
              thumbnail="https://static-01.daraz.com.bd/p/b42835b4dc119aac2d45c4cdf15b1d85.jpg"
              name="Air Force 1"
              uri="#"
            />
          </div>

          <div className="columns medium-4 small-12 mb-30">
            <ProductCategoryBox
              thumbnail="https://static-01.daraz.com.bd/p/b42835b4dc119aac2d45c4cdf15b1d85.jpg"
              name="Air Force 1"
              uri="#"
            />
          </div>
        </div>
      </div>
      {/* end: product-category */}

      <section className={`${styles.filters__wrap} section-padding-bottom`}>
        <div className="row">
          <div className="columns small-12">
            <div className={styles.filters__inner}>
              <span className={styles.filters__inner__title}>Filters</span>
              <CategoryFilter />
            </div>
          </div>
        </div>
      </section>
      {/* end: category filters wrap */}

      <div className={styles.product__sort__filter__wrap}>
        <div className="row">
          <div className="columns small-12 text-right">
            <SortByFilter />
          </div>
        </div>
      </div>
      {/* end: sort filter wrap */}

      <section className={`${styles.brand__archive__wrap} section-padding-bottom`}>
        <div className="row">
          <div className="columns medium-3 small-12">
            <BrandArchiveSidebar />
          </div>

          <div className="columns medium-9 small-12">
            <div className={`row section-padding-bottom ${styles.product__archive__fixed__width}`}>
              <SingleProductCard
                dateTime="20 Feb 2021 8:00 AM GMT"
                mediaSrc="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-8906819/eagle_eagle_hybrid_sepatu_lari_pria_wanita_running_shoes_unisex_full01_hcqrpnic.jpg"
                stockInfo="In Stock"
                title="Nike Air Structure Triax 91 Neo Black CV3492-100"
                price="$100.00"
                url="#"
                btnUrl="#"
              />

              <SingleProductCard
                dateTime="20 Feb 2021 8:00 AM GMT"
                mediaSrc="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-8906819/eagle_eagle_hybrid_sepatu_lari_pria_wanita_running_shoes_unisex_full01_hcqrpnic.jpg"
                stockInfo="In Stock"
                title="Nike Air Structure Triax 91 Neo Black CV3492-100"
                price="$100.00"
                url="#"
                btnUrl="#"
              />

              <SingleProductCard
                dateTime="20 Feb 2021 8:00 AM GMT"
                mediaSrc="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-8906819/eagle_eagle_hybrid_sepatu_lari_pria_wanita_running_shoes_unisex_full01_hcqrpnic.jpg"
                stockInfo="In Stock"
                title="Nike Air Structure Triax 91 Neo Black CV3492-100"
                price="$100.00"
                url="#"
                btnUrl="#"
              />

              <SingleProductCard
                dateTime="20 Feb 2021 8:00 AM GMT"
                mediaSrc="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-8906819/eagle_eagle_hybrid_sepatu_lari_pria_wanita_running_shoes_unisex_full01_hcqrpnic.jpg"
                stockInfo="In Stock"
                title="Nike Air Structure Triax 91 Neo Black CV3492-100"
                price="$100.00"
                url="#"
                btnUrl="#"
              />

              <SingleProductCard
                dateTime="20 Feb 2021 8:00 AM GMT"
                mediaSrc="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-8906819/eagle_eagle_hybrid_sepatu_lari_pria_wanita_running_shoes_unisex_full01_hcqrpnic.jpg"
                stockInfo="Coming Soon"
                title="Nike Air Structure Triax 91 Neo Black CV3492-100"
                price="$100.00"
                url="#"
                btnUrl="#"
              />

              <SingleProductCard
                dateTime="20 Feb 2021 8:00 AM GMT"
                mediaSrc="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-8906819/eagle_eagle_hybrid_sepatu_lari_pria_wanita_running_shoes_unisex_full01_hcqrpnic.jpg"
                stockInfo="Coming Soon"
                title="Nike Air Structure Triax 91 Neo Black CV3492-100"
                price="$100.00"
                url="#"
                btnUrl="#"
              />

              <SingleProductCard
                dateTime="20 Feb 2021 8:00 AM GMT"
                mediaSrc="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-8906819/eagle_eagle_hybrid_sepatu_lari_pria_wanita_running_shoes_unisex_full01_hcqrpnic.jpg"
                stockInfo="Coming Soon"
                title="Nike Air Structure Triax 91 Neo Black CV3492-100"
                price="$100.00"
                url="#"
                btnUrl="#"
              />

              <SingleProductCard
                dateTime="20 Feb 2021 8:00 AM GMT"
                mediaSrc="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-8906819/eagle_eagle_hybrid_sepatu_lari_pria_wanita_running_shoes_unisex_full01_hcqrpnic.jpg"
                stockInfo="Coming Soon"
                title="Nike Air Structure Triax 91 Neo Black CV3492-100"
                price="$100.00"
                url="#"
                btnUrl="#"
              />
            </div>

            <Pagination />
            {/* end: pagination */}
          </div>
        </div>
      </section>

      <div className="mb-70">
        <SectionHeading title="Recent Nike News " url="#" />

        <div className="row">
          <div className="columns small-12 medium-4">
            <NewsCardLatest
              thumbnail="https://via.placeholder.com/700x375"
              title="On Feet Images Of The Upcoming Nike Dunk Low “Free 99 Pack"
              postDate="25 May, 2020"
            />
          </div>

          <div className="columns small-12 medium-4">
            <NewsCardLatest
              thumbnail="https://via.placeholder.com/700x375"
              title="On Feet Images Of The Upcoming Nike Dunk Low “Free 99 Pack"
              postDate="25 May, 2020"
            />
          </div>

          <div className="columns small-12 medium-4">
            <NewsCardLatest
              thumbnail="https://via.placeholder.com/700x375"
              title="On Feet Images Of The Upcoming Nike Dunk Low “Free 99 Pack"
              postDate="25 May, 2020"
            />
          </div>
        </div>
      </div>

      <div className="section-padding-bottom">
        <div className="row">
          <div className="columns">
            <ReadMoreText />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandArchive;
