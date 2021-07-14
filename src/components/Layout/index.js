import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="site__wrapper">
      <Header />

      <main className="content__wrap" role="main">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
