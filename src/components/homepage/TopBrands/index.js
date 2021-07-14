/**
 * Internal dependecies
 */
import SingleBrandProductCard from '~/src/components/common/SingleBrandProductCard';
import { Nike } from '~/src/components/icons';
import SectionHeading from '~/src/components/common/SectionHeading';

import style from './topbrands.module.scss';

const TopBrands = () => {
  return (
    <section className={`topbrands ${style.product_container}`}>
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
    </section>
  );
};

export default TopBrands;
