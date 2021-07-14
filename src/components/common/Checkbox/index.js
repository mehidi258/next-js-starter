import styles from './index.module.scss';

const Checkbox = ({ label, name, value, onChange, bgColor }) => {
  return (
    <>
      <label className={styles.checkbox} style={{ background: bgColor }}>
        <input type="checkbox" name={name || ''} value={value || ''} onChange={onChange} />
        <span className={styles.checkbox__label}>{label || ''}</span>
      </label>
    </>
  );
};

export default Checkbox;
