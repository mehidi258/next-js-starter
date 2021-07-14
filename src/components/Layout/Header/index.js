import React, { useState, useEffect } from 'react';

import BrandLogo from '~/src/components/common/BrandLogo';
import HeaderNavigation from '~/src/components/Layout/HeaderNavigation';
import SearchItems from '~/src/components/SearchItems';

const Header = () => {
  let [sticky, setSticky] = useState(false);

  useEffect(() => {
    const navigationWrap = document.querySelector('.navigation-row');
    const navigationOffsetTop = navigationWrap.offsetTop;

    const handleStickyHeader = () => {
      if (window.scrollY > navigationOffsetTop) {
        setSticky((sticky = true));
      } else {
        setSticky((sticky = false));
      }
    };

    window.addEventListener('scroll', handleStickyHeader);
  }, []);

  return (
    <header
      className={`${sticky ? 'fastsole-primary-header isSticky' : 'fastsole-primary-header'}`}>
      {sticky == false ? (
        <div className="row top-row align-middle">
          <div className="columns large-3 small-12">
            <BrandLogo />
          </div>

          <div className="columns large-7 large-offset-2 search_items_row">
            <SearchItems />
          </div>
        </div>
      ) : (
        ''
      )}

      <HeaderNavigation sticky={sticky} />
    </header>
  );
};

export default Header;
