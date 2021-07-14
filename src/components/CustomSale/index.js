import PageHeading from '~/src/components/common/PageHeading';
import DiscountCard from './DiscountCard';
import ReadMore from '~/src/components/common/ReadMoreText';

const CustomSale = () => {
  return (
    <>
      <div className="section-padding-bottom">
        <div className="row">
          <div className="columns">
            <PageHeading
              title="Black friday 2020"
              breadcrumbItems={[]}
              breadcrumbActive="Black friday 2020"
            />
          </div>
        </div>
      </div>

      <div className="section-padding-bottom">
        <div className="row">
          <div className="columns small-12 medium-3 mb-40">
            <DiscountCard
              mediaSrc="https://cdn.pixabay.com/photo/2017/10/30/08/41/black-friday-2901748_1280.png"
              title="Addidas up to 50% off"
              startDate="9.11.2020"
              endDate="24.11.2020"
              uri="#"
            />
          </div>

          <div className="columns small-12 medium-3 mb-40">
            <DiscountCard
              mediaSrc="https://cdn.pixabay.com/photo/2017/10/30/08/41/black-friday-2901748_1280.png"
              title="Addidas up to 50% off"
              startDate="9.11.2020"
              endDate="24.11.2020"
              uri="#"
            />
          </div>

          <div className="columns small-12 medium-3 mb-40">
            <DiscountCard
              mediaSrc="https://cdn.pixabay.com/photo/2017/10/30/08/41/black-friday-2901748_1280.png"
              title="Addidas up to 50% off"
              startDate="9.11.2020"
              endDate="24.11.2020"
              uri="#"
            />
          </div>

          <div className="columns small-12 medium-3 mb-40">
            <DiscountCard
              mediaSrc="https://cdn.pixabay.com/photo/2017/10/30/08/41/black-friday-2901748_1280.png"
              title="Addidas up to 50% off"
              startDate="9.11.2020"
              endDate="24.11.2020"
              uri="#"
            />
          </div>

          <div className="columns small-12 medium-3 mb-40">
            <DiscountCard
              mediaSrc="https://cdn.pixabay.com/photo/2017/10/30/08/41/black-friday-2901748_1280.png"
              title="Addidas up to 50% off"
              startDate="9.11.2020"
              endDate="24.11.2020"
              uri="#"
            />
          </div>

          <div className="columns small-12 medium-3 mb-40">
            <DiscountCard
              mediaSrc="https://cdn.pixabay.com/photo/2017/10/30/08/41/black-friday-2901748_1280.png"
              title="Addidas up to 50% off"
              startDate="9.11.2020"
              endDate="24.11.2020"
              uri="#"
            />
          </div>

          <div className="columns small-12 medium-3 mb-40">
            <DiscountCard
              mediaSrc="https://cdn.pixabay.com/photo/2017/10/30/08/41/black-friday-2901748_1280.png"
              title="Addidas up to 50% off"
              startDate="9.11.2020"
              endDate="24.11.2020"
              uri="#"
            />
          </div>

          <div className="columns small-12 medium-3 mb-40">
            <DiscountCard
              mediaSrc="https://cdn.pixabay.com/photo/2017/10/30/08/41/black-friday-2901748_1280.png"
              title="Addidas up to 50% off"
              startDate="9.11.2020"
              endDate="24.11.2020"
              uri="#"
            />
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

export default CustomSale;
