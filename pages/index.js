import Layout from '../src/components/Layout';
import HeroSection from '../src/components/homepage/HeroSection';
import LatestNews from '../src/components/homepage/LatestNews';
import TopBrands from '../src/components/homepage/TopBrands';
import OnFocus from '../src/components/homepage/OnFocus';
import ComingSoon from '../src/components/homepage/ComingSoon';
import BrandLogoScroller from '../src/components/homepage/BrandLogoScroller';
import Newsletter from '~/src/components/Newsletter';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <TopBrands />
      <OnFocus />
      <ComingSoon />
      <BrandLogoScroller />
      <LatestNews />
      <Newsletter />
    </Layout>
  );
}
