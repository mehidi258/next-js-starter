import Link from 'next/link';

import BrandLogo from '~/src/components/common/BrandLogo';
import { Search } from '~/src/components/icons';

const Navigation = ({ sticky }) => {
  return (
    <div className="row navigation-row align-middle">
      {sticky ? (
        <div className="columns large-3 small-12">
          <BrandLogo />
        </div>
      ) : (
          ''
        )}

      <div className="columns">
        <nav className="fastsole-primary-menu">
          <ul>
            <li className="active">
              <a href="#">Browse all Brand</a>
              <ul className="fastsole-menu-sub-nav">
                <li>
                  <a href="#" className="sub-menu-brand-logo">
                    <img
                      src="https://cms-cdn.thesolesupplier.co.uk/2019/12/adidasbrand-logo-ftw_w200.png"
                      alt="Addidas"
                      width="50"
                    />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Power Banks</a>
                    </li>
                    <li>
                      <a href="#">Speakers</a>
                    </li>
                    <li>
                      <a href="#">TWS (True Wireless)</a>
                    </li>
                    <li>
                      <a href="#">Gift Voucher</a>
                    </li>
                    <li>
                      <a href="#">Headset</a>
                    </li>
                    <li>
                      <a href="#">Charger &amp; Adapter</a>
                    </li>
                    <li>
                      <a href="#">Wireless Charger</a>
                    </li>
                    <li>
                      <a href="#">Car Accessories</a>
                    </li>
                    <li>
                      <a href="#">Fitness &amp; Wearable</a>
                    </li>
                    <li>
                      <a href="#">Media Players</a>
                    </li>
                    <li>
                      <a href="#">Flash Drive</a>
                    </li>
                    <li>
                      <a href="#">Storage/Hard Drive</a>
                    </li>
                    <li>
                      <a href="#">Computer Accessories</a>
                    </li>
                    <li>
                      <a href="#">Memory Card</a>
                    </li>
                  </ul>
                  <a href="#" className="view-all-brand-item">
                    View all
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-brand-logo">
                    <img
                      src="https://cms-cdn.thesolesupplier.co.uk/2019/12/adidasbrand-logo-ftw_w200.png"
                      alt="Addidas"
                      width="50"
                    />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Power Banks</a>
                    </li>
                    <li>
                      <a href="#">Speakers</a>
                    </li>
                    <li>
                      <a href="#">TWS (True Wireless)</a>
                    </li>
                    <li>
                      <a href="#">Gift Voucher</a>
                    </li>
                    <li>
                      <a href="#">Headset</a>
                    </li>
                    <li>
                      <a href="#">Charger &amp; Adapter</a>
                    </li>
                    <li>
                      <a href="#">Wireless Charger</a>
                    </li>
                    <li>
                      <a href="#">Flash Drive</a>
                    </li>
                    <li>
                      <a href="#">Storage/Hard Drive</a>
                    </li>
                    <li>
                      <a href="#">Computer Accessories</a>
                    </li>
                    <li>
                      <a href="#">Memory Card</a>
                    </li>
                  </ul>
                  <a href="#" className="view-all-brand-item">
                    View all
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-brand-logo">
                    <img
                      src="https://cms-cdn.thesolesupplier.co.uk/2019/12/adidasbrand-logo-ftw_w200.png"
                      alt="Addidas"
                      width="50"
                    />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Power Banks</a>
                    </li>
                    <li>
                      <a href="#">Speakers</a>
                    </li>
                    <li>
                      <a href="#">TWS (True Wireless)</a>
                    </li>
                    <li>
                      <a href="#">Gift Voucher</a>
                    </li>
                    <li>
                      <a href="#">Headset</a>
                    </li>
                    <li>
                      <a href="#">Charger &amp; Adapter</a>
                    </li>
                    <li>
                      <a href="#">Wireless Charger</a>
                    </li>
                    <li>
                      <a href="#">Car Accessories</a>
                    </li>
                    <li>
                      <a href="#">Fitness &amp; Wearable</a>
                    </li>
                    <li>
                      <a href="#">Media Players</a>
                    </li>
                    <li>
                      <a href="#">Flash Drive</a>
                    </li>
                  </ul>
                  <a href="#" className="view-all-brand-item">
                    View all
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-brand-logo">
                    <img
                      src="https://cms-cdn.thesolesupplier.co.uk/2019/12/adidasbrand-logo-ftw_w200.png"
                      alt="Addidas"
                      width="50"
                    />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Power Banks</a>
                    </li>
                    <li>
                      <a href="#">Speakers</a>
                    </li>
                    <li>
                      <a href="#">TWS (True Wireless)</a>
                    </li>
                    <li>
                      <a href="#">Gift Voucher</a>
                    </li>
                    <li>
                      <a href="#">Headset</a>
                    </li>
                    <li>
                      <a href="#">Charger &amp; Adapter</a>
                    </li>
                    <li>
                      <a href="#">Wireless Charger</a>
                    </li>
                    <li>
                      <a href="#">Car Accessories</a>
                    </li>
                  </ul>
                  <a href="#" className="view-all-brand-item">
                    View all
                  </a>
                </li>
                <li>
                  <a href="#" className="sub-menu-brand-logo">
                    <img
                      src="https://cms-cdn.thesolesupplier.co.uk/2019/12/adidasbrand-logo-ftw_w200.png"
                      alt="Addidas"
                      width="50"
                    />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Power Banks</a>
                    </li>
                    <li>
                      <a href="#">Speakers</a>
                    </li>
                    <li>
                      <a href="#">TWS (True Wireless)</a>
                    </li>
                    <li>
                      <a href="#">Gift Voucher</a>
                    </li>
                    <li>
                      <a href="#">Headset</a>
                    </li>
                    <li>
                      <a href="#">Charger &amp; Adapter</a>
                    </li>
                    <li>
                      <a href="#">Wireless Charger</a>
                    </li>
                    <li>
                      <a href="#">Car Accessories</a>
                    </li>
                    <li>
                      <a href="#">Fitness &amp; Wearable</a>
                    </li>
                    <li>
                      <a href="#">Media Players</a>
                    </li>
                    <li>
                      <a href="#">Flash Drive</a>
                    </li>
                  </ul>
                  <a href="#" className="view-all-brand-item">
                    View all
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about">
                <a>About us</a>
              </Link>
            </li>
            <li>
              <Link href="/brands-archive">
                <a>Release Date</a>
              </Link>
            </li>
            <li>
              <Link href="/single-product">
                <a>Product</a>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <a>News</a>
              </Link>
            </li>
            <li>
              <Link href="/custom-sale">
                <a>Offer &amp; Discount</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contant us</a>
              </Link>
            </li>
            {sticky ? (
              <li>
                <a href="#">
                  <Search />
                </a>
              </li>
            ) : (
                ''
              )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
