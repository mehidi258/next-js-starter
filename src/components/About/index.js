import Link from 'next/link';
import SectionHeading from '~/src/components/common/SectionHeading';
import NewsCardLatest from '~/src/components/common/NewsCardLatest';
import Breadcrumb from '~/src/components/common/Breadcrumb';
import TeamMember from './TeamMember/';
import Accordion from '~/src/components/common/Accordion';
import { Location, Mail, Call } from '~/src/components/icons';
import styles from './index.module.scss';

const accordionItems = [
  {
    title: 'What can I expect from FastSole?',
    description:
      'You can expect updated confirmed release time, stockists and direct links to all the upcoming and hot sneaker releases.'
  },
  {
    title: 'Do you sell sneakers?',
    description:
      'You can expect updated confirmed release time, stockists and direct links to all the upcoming and hot sneaker releases.'
  },
  {
    title: 'Can you find a sneaker I’m looking for?',
    description:
      'You can expect updated confirmed release time, stockists and direct links to all the upcoming and hot sneaker releases.'
  }
];

const About = () => {
  return (
    <>
      <div className="section-padding-bottom">
        <div className="row">
          <div className="columns">
            <div className="section-padding-bottom">
              <Breadcrumb items={[]} activePage="About" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="columns">
            <div className={styles.heading__full__width__img}>
              <img
                src="https://images.unsplash.com/photo-1562183241-840b8af0721e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1601&q=80"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding-bottom">
        <div className="row">
          <div className="columns">
            <div className="page__content">
              <h2>About</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <p>
                Nunc lobortis mattis aliquam faucibus purus in massa tempor. Vulputate enim nulla
                aliquet porttitor lacus luctus accumsan tortor. Suspendisse potenti nullam ac tortor
                vitae purus faucibus ornare. Duis tristique sollicitudin nibh sit amet commodo
                nulla. Viverra maecenas accumsan lacus vel. Habitasse platea dictumst vestibulum
                rhoncus est pellentesque elit ullamcorper dignissim. Tellus integer feugiat
                scelerisque varius morbi enim nunc faucibus a. Nibh cras pulvinar mattis nunc sed.
                Tincidunt lobortis feugiat vivamus at augue eget. Neque aliquam vestibulum morbi
                blandit cursus risus. Tincidunt vitae semper quis lectus. Lorem ipsum dolor sit amet
                consectetur adipiscing. Amet nisl purus in mollis nunc sed id.
              </p>
              <p>
                Eget lorem dolor sed viverra ipsum nunc. Viverra orci sagittis eu volutpat odio
                facilisis mauris sit amet. Nullam non nisi est sit amet. Libero volutpat sed cras
                ornare. Praesent elementum facilisis leo vel fringilla. Pellentesque diam volutpat
                commodo sed egestas. Leo integer malesuada nunc vel risus commodo. Aliquet nec
                ullamcorper sit amet risus nullam. Sed euismod nisi porta lorem. Duis at tellus at
                urna condimentum mattis pellentesque id nibh. Orci porta non pulvinar neque laoreet
                suspendisse. Cum sociis natoque penatibus et magnis dis parturient montes nascetur.
                Nisl nunc mi ipsum faucibus. Ipsum nunc aliquet bibendum enim.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding-bottom">
        <div className="row">
          <div className="columns small-12 medium-4 mb-40">
            <div className={styles.location__wrap}>
              <h3>Location</h3>
              <div className={styles.address}>
                <h4 className={styles.address__title}>Address</h4>

                <div className={styles.address__item}>
                  <span className={styles.address__item__icon}>
                    <Location />
                  </span>
                  <div className={styles.address__item__content}>
                    <strong>Fastsole Private Ltd</strong>
                    <br />
                    16 Windermere Court <br />
                    22 Trinity Trees, Eastbourne <br />
                    United Kingdom <br />
                    BN21 3LE
                  </div>
                </div>

                <div className={styles.address__item}>
                  <span className={styles.address__item__icon}>
                    <Mail />
                  </span>
                  <div className={styles.address__item__content}>info@fastsole.com</div>
                </div>

                <div className={styles.address__item}>
                  <span className={styles.address__item__icon}>
                    <Call />
                  </span>
                  <div className={styles.address__item__content}>123 456 7890</div>
                </div>
              </div>
              <span className={styles.note__text}>
                * Fastsole Private Ltd is registered in England & Wales with company number 10812528
              </span>
            </div>
          </div>

          <div className="columns small-12 medium-7 medium-offset-1">
            <h3 className="mt-0">Faq</h3>
            <Accordion accordionItems={accordionItems} />
          </div>
        </div>
      </div>

      <div className="section-padding-bottom">
        <div className="row">
          <div className="columns small-12 medium-4 mb-100">
            <TeamMember
              name="Sourov Roy"
              avatar="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
              designation="Co-Founder"
              bio="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"
              facebookUrl="#"
              twitterUrl="#"
              linkedinUrl="#"
              instagramUrl="#"
            />
          </div>

          <div className="columns small-12 medium-4 mb-100">
            <TeamMember
              name="Sourov Roy"
              avatar="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
              designation="Co-Founder"
              bio="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"
              facebookUrl="#"
              twitterUrl="#"
              linkedinUrl="#"
              instagramUrl="#"
            />
          </div>

          <div className="columns small-12 medium-4 mb-100">
            <TeamMember
              name="Sourov Roy"
              avatar="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
              designation="Co-Founder"
              bio="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"
              facebookUrl="#"
              twitterUrl="#"
              linkedinUrl="#"
              instagramUrl="#"
            />
          </div>

          <div className="columns small-12 medium-4 mb-100">
            <TeamMember
              name="Sourov Roy"
              avatar="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
              designation="Co-Founder"
              bio="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"
              facebookUrl="#"
              twitterUrl="#"
              linkedinUrl="#"
              instagramUrl="#"
            />
          </div>

          <div className="columns small-12 medium-4 mb-100">
            <TeamMember
              name="Sourov Roy"
              avatar="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
              designation="Co-Founder"
              bio="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"
              facebookUrl="#"
              twitterUrl="#"
              linkedinUrl="#"
              instagramUrl="#"
            />
          </div>

          <div className="columns small-12 medium-4 mb-100">
            <TeamMember
              name="Sourov Roy"
              avatar="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
              designation="Co-Founder"
              bio="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor"
              facebookUrl="#"
              twitterUrl="#"
              linkedinUrl="#"
              instagramUrl="#"
            />
          </div>
        </div>
      </div>

      <div className="section-padding-bottom">
        <SectionHeading title="Ppopular Sneaker News" uri="#" />

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
        </div>
      </div>
    </>
  );
};

export default About;
