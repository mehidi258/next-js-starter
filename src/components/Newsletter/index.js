// Import necessary icons
import { RightArrow } from '~/src/components/icons';
// Component-level styling
import style from './newsletter.module.css';

const Newsletter = () => {
  return (
    <div className={`row newsletter-container align-center`}>
      <div className={`${style.newletter_bg}`}></div>

      <div className="columns large-12 medium-12 small-12">
        <h2 className="row align-center">Get our daily newsletter</h2>
      </div>

      <div className="columns large-12 medium-12 small-12">
        <div className="row align-center">
          <div className="columns large-5 medium-8 small-10 signup">
            <h3>
              Get 40% OFF your whole order at checkout when you add three or more books to your cart
            </h3>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="row align-center">
          <div className="columns large-5 medium-7 small-11 signup">
            <form>
              <div className="input-field">
                <input type="text" name="email" placeholder="Subscribe now" />
                <span className="side-right-arrow large-2">
                  <RightArrow />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
