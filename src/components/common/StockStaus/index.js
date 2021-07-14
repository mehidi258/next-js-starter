import { InStock, ComingSoon, SoldOut } from '~/src/components/icons';
import styles from './index.module.scss';

const StockStatus = ({ stockInfo }) => {
  // Check Stock Status
  const stockStatusCheck = () => {
    if (stockInfo === 'In Stock') {
      return <InStock />;
    } else if (stockInfo === 'Sold Out') {
      return <SoldOut />;
    } else if (stockInfo === 'Coming Soon') {
      return <ComingSoon />;
    }
  };

  const handleTextColor = () => {
    if (stockInfo === 'In Stock') {
      return '#3eb75e';
    } else if (stockInfo === 'Sold Out') {
      return '#f12026';
    } else if (stockInfo === 'Coming Soon') {
      return '#ff6600';
    }
  };

  return (
    <span className={styles.stock__status} style={{ color: handleTextColor() }}>
      {stockStatusCheck()} {stockInfo}
    </span>
  );
};

export default StockStatus;
