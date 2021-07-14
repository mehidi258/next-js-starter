import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="site__wrapper">
      <Header />

      <div className="content__wrap">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
