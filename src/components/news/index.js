import PageHeading from '~/src/components/common/PageHeading';
import SectionHeading from '~/src/components/common/SectionHeading';
import NewsCardLatest from '~/src/components/common/NewsCardLatest';
import Pagination from '~/src/components/common/Pagination';
import ReadMore from '~/src/components/common/ReadMoreText';

const News = () => {
  return (
    <>
      <div className="section-padding-bottom">
        <div className="row">
          <div className="columns">
            <PageHeading title="Sneaker News" breadcrumbItems={[]} breadcrumbActive="News" />
          </div>
        </div>
      </div>

      <div className="section-padding-bottom">
        <div className="row">
          <div className="columns small-12 medium-6">
            <NewsCardLatest
              thumbnail="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/different_athletic_shoe_types_slideshow/493ss_thinkstock_rf_walking_shoes.jpg"
              title="These Nike Air Force 1 Gore-Tex Sneakers Are Now on Sale!"
              excerpt="The Nike Surplus Supply pack is the latest offering from the Swoosh brand that takes..."
              url="#"
              postDate="Tue 16 Mar 2021  2pm"
              postAuthor="Admin"
              postAuthorUri="#"
            />
          </div>

          <div className="columns small-12 medium-6">
            <NewsCardLatest
              thumbnail="https://i.pinimg.com/originals/83/64/66/83646654668bf9ae412f45bb2e417ddf.jpg"
              listView={true} // except boolean value
              title="Air Jordan 1 Mid White University Gold...."
              excerpt="The Nike Surplus Supply pack is the latest offering from the Swoosh brand that takes..."
              url="#"
              postDate="Tue 16 Mar 2021 2pm"
              postAuthor="Admin"
              postAuthorUri="#"
            />

            <NewsCardLatest
              thumbnail="https://i.pinimg.com/originals/83/64/66/83646654668bf9ae412f45bb2e417ddf.jpg"
              listView={true} // except boolean value
              title="Air Jordan 1 Mid White University Gold...."
              excerpt="The Nike Surplus Supply pack is the latest offering from the Swoosh brand that takes..."
              url="#"
              postDate="Tue 16 Mar 2021  2pm"
              postAuthor="Admin"
              postAuthorUri="#"
            />
          </div>
        </div>
      </div>

      <div className="section-padding-bottom">
        <SectionHeading title="Ppopular Sneaker News" uri="" />

        <div className="row">
          <div className="columns small-12 medium-4">
            <NewsCardLatest
              thumbnail="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/different_athletic_shoe_types_slideshow/493ss_thinkstock_rf_walking_shoes.jpg"
              title="These Nike Air Force 1 Gore-Tex Sneakers Are Now on Sale!"
              url=""
              postDate="25 May, 2020"
              variant="square"
            />
          </div>

          <div className="columns small-12 medium-4">
            <NewsCardLatest
              thumbnail="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/different_athletic_shoe_types_slideshow/493ss_thinkstock_rf_walking_shoes.jpg"
              title="These Nike Air Force 1 Gore-Tex Sneakers Are Now on Sale!"
              url=""
              postDate="10 June, 2020"
              variant="square"
            />
          </div>

          <div className="columns small-12 medium-4">
            <NewsCardLatest
              thumbnail="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/different_athletic_shoe_types_slideshow/493ss_thinkstock_rf_walking_shoes.jpg"
              title="These Nike Air Force 1 Gore-Tex Sneakers Are Now on Sale!"
              url=""
              postDate="05 April, 2020"
              variant="square"
            />
          </div>

          <div className="columns small-12 medium-4">
            <NewsCardLatest
              thumbnail="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/different_athletic_shoe_types_slideshow/493ss_thinkstock_rf_walking_shoes.jpg"
              title="These Nike Air Force 1 Gore-Tex Sneakers Are Now on Sale!"
              url=""
              postDate="25 May, 2020"
              variant="square"
            />
          </div>

          <div className="columns small-12 medium-4">
            <NewsCardLatest
              thumbnail="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/different_athletic_shoe_types_slideshow/493ss_thinkstock_rf_walking_shoes.jpg"
              title="These Nike Air Force 1 Gore-Tex Sneakers Are Now on Sale!"
              url=""
              postDate="25 May, 2020"
              variant="square"
            />
          </div>

          <div className="columns small-12 medium-4">
            <NewsCardLatest
              thumbnail="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/different_athletic_shoe_types_slideshow/493ss_thinkstock_rf_walking_shoes.jpg"
              title="These Nike Air Force 1 Gore-Tex Sneakers Are Now on Sale!"
              url=""
              postDate="25 May, 2020"
              variant="square"
            />
          </div>

          <div className="columns small-12 medium-4">
            <NewsCardLatest
              thumbnail="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/different_athletic_shoe_types_slideshow/493ss_thinkstock_rf_walking_shoes.jpg"
              title="These Nike Air Force 1 Gore-Tex Sneakers Are Now on Sale!"
              url=""
              postDate="25 May, 2020"
              variant="square"
            />
          </div>

          <div className="columns small-12 medium-4">
            <NewsCardLatest
              thumbnail="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/different_athletic_shoe_types_slideshow/493ss_thinkstock_rf_walking_shoes.jpg"
              title="These Nike Air Force 1 Gore-Tex Sneakers Are Now on Sale!"
              url=""
              postDate="25 May, 2020"
              variant="square"
            />
          </div>

          <div className="columns small-12 medium-4">
            <NewsCardLatest
              thumbnail="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/different_athletic_shoe_types_slideshow/493ss_thinkstock_rf_walking_shoes.jpg"
              title="These Nike Air Force 1 Gore-Tex Sneakers Are Now on Sale!"
              url=""
              postDate="25 May, 2020"
              variant="square"
            />
          </div>
        </div>
      </div>

      <div className="section-padding-bottom">
        <div className="row">
          <div className="columns">
            <Pagination />
          </div>
        </div>
      </div>

      <div className="section-padding-bottom">
        <div className="row">
          <div className="columns">
            <ReadMore />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
