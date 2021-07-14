import PageHeading from '~/src/components/common/PageHeading';
import NewsWidget from '~/src/components/SingleNews/NewsWidget';
import Newsletter from '~/src/components/Newsletter';
import { Location, Mail, Call } from '~/src/components/icons';

import styles from './index.module.scss';
const items = [
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

const Contact = () => {
  return (
    <>
      <div className="section-padding-bottom">
        <div className="row">
          <div className="columns">
            <div className="section-padding-bottom">
              <PageHeading title="Contact" breadcrumbItems={[]} breadcrumbActive="Contact" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="columns small-12 medium-10 medium-offset-1 text-center">
            <p>
              FastSole.co.uk is a web portal for the UK and Europe Sneaker News & Release Updates
              with a confirmed stock list of released and upcoming products. We will provide you
              with information about popular brands and series such as Nike, Adidas, NMD, Yeezy,
              ASICS, PUMA, Reebok, Balenciaga, Valentino and much more.
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding-bottom">
        <div className="row">
          <div className="columns small-12 medium-6">
            <div className={styles.address}>
              <h4 className={styles.address__title}>Address</h4>

              <div className={styles.address__inner}>
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

                <div>
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
              </div>
            </div>

            <div className={styles.contact__form}>
              <h3>Feel free to contact us </h3>
              <form>
                <div className="input-group">
                  <label htmlFor="name">
                    Full name <span className="require">*</span>
                  </label>
                  <input type="text" name="name" id="name" placeholder="Your Full name here" />
                </div>

                <div className="input-group">
                  <label htmlFor="name">
                    Email <span className="require">*</span>
                  </label>
                  <input type="email" name="name" id="email" placeholder="Your Full name here" />
                </div>

                <div className="input-group">
                  <label htmlFor="phone">
                    Phone number <span className="require">*</span>
                  </label>
                  <input type="text" name="name" id="phone" placeholder="Your Full name here" />
                </div>

                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea placeholder="Type your message here" id="message"></textarea>
                </div>

                <div className="input-group text-right mb-0">
                  <input type="submit" value="Submit" className="btn" />
                </div>
              </form>
            </div>
          </div>

          <div className="columns small-12 medium-4 medium-offset-2">
            <div className="news__aside">
              <NewsWidget widgetTitle="Popular  Products" newsItems={items} />
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default Contact;
