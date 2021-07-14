/**
 * Internal dependencies.
 */
import { Nike } from '../../icons/index';
import style from './brandscroller.module.scss';

const BrandLogoScroller = () => {
  return (
    <section className={style.brandlogo_scroller_container}>
      <div className="row">
        <div className="columns large-2 medium-2 small-6">
          <div className={style.single_brandlogo}>
            <Nike />
          </div>
        </div>
        <div className="columns large-2 medium-2 small-6">
          <div className={style.single_brandlogo}>
            <Nike />
          </div>
        </div>
        <div className="columns large-2 medium-2 small-6">
          <div className={style.single_brandlogo}>
            <Nike />
          </div>
        </div>
        <div className="columns large-2 medium-2 small-6">
          <div className={style.single_brandlogo}>
            <Nike />
          </div>
        </div>
        <div className="columns large-2 medium-2 small-6">
          <div className={style.single_brandlogo}>
            <Nike />
          </div>
        </div>
        <div className="columns large-2 medium-2 small-6">
          <div className={style.single_brandlogo}>
            <Nike />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogoScroller;
