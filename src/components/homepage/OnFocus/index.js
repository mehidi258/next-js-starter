/**
 * Internal dependecies.
 */
import SingleProductCard from '~/src/components/common/SingleProductCard';
import SectionHeading from '~/src/components/common/SectionHeading';

import style from './onfocus.module.scss';

const OnFocus = () => {
  return (
    <section className={style.product_container}>
      <SectionHeading title="On Focus" uri="#" />

      <div className="row">
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
      </div>
    </section>
  );
};

export default OnFocus;
