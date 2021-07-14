import Link from 'next/link';
// Import necessary icons
import {
  Logo,
  Marker,
  Envelop,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from '../../icons/index';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="row footer-first">
        <div className="columns large-4 medium-9 small-12">
          <div className="widget">
            <div className="logo">
              <Link href={'https://fastsole.co.uk/'}>
                <a>
                  <Logo />
                </a>
              </Link>
            </div>

            <div className="address-container">
              <div className="single-address">
                <div className="row">
                  <div className="columns large-1 small-1 icon">
                    <Marker />
                  </div>
                  <div className="columns large-11 small-11 address-block">
                    184 Main Rd E, St Albans
                    <br />
                    VIC 3021, Australia
                  </div>
                </div>
              </div>
              <div className="single-address">
                <div className="row">
                  <div className="columns large-1 small-1 icon">
                    <Envelop />
                  </div>
                  <div className="columns large-11 small-11 address-block">contact@company.com</div>
                </div>
              </div>
              <div className="single-address">
                <div className="row">
                  <div className="columns large-1 small-1 icon">
                    <Phone />
                  </div>
                  <div className="columns large-11 small-11 address-block">+123 456 44 345</div>
                </div>
              </div>
            </div>

            <div className="social-icons">
              <ul>
                <li>
                  <a href={'https://www.facebook.com/'} target="_blank" rel="noreferrer">
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a href={'https://www.twitter.com/'} target="_blank" rel="noreferrer">
                    <Twitter />
                  </a>
                </li>
                <li>
                  <a href={'https://www.linkedin.com/'} target="_blank" rel="noreferrer">
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a href={'https://www.instagram.com/'} target="_blank" rel="noreferrer">
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="columns large-2 medium-3 small-6">
          <div className="menu-widget">
            <div className="widget-title">
              <h3>Information</h3>
            </div>
            <div className="menu-list">
              <ul>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Store Information</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Latest Posts</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Size Guide</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>About Us</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>FAQs</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="columns large-offset-0 large-2 medium-offset-1 medium-4 small-6">
          <div className="menu-widget">
            <div className="widget-title">
              <h3>Support</h3>
            </div>
            <div className="menu-list">
              <ul>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Contact us</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Shipping &amp; Delivery</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Terms &amp; Conditions</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Returns &amp; Exchanges</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="columns large-2 medium-4 small-6">
          <div className="menu-widget">
            <div className="widget-title">
              <h3>Community</h3>
            </div>
            <div className="menu-list">
              <ul>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Celebrations</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Events</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Home Decor</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Seasonal Bouquet</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Wedding Decor</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Wedding Decor</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="columns large-2 medium-3 small-6">
          <div className="menu-widget">
            <div className="widget-title">
              <h3>Brands</h3>
            </div>
            <div className="menu-list">
              <ul>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Brands</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Nike</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>adidas</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Puma</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>Converse</a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'http://fastsole.co.uk/'}>
                    <a>New Balance</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright__wrap">
        <div className="row">
          <div className="columns">
            <div className="copyright-container">
              Copyright Fastsole 2021 | All Rights Reserved | Company Reg No. 10812528 | Impressum
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
