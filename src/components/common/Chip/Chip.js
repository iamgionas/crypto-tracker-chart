import styles from './Chip.module.scss';

const Chip = ({ label, value }) => {
  // TODO MAKE A Chip COMPONENT AND STYLE + CONTEXT NOT PROPS TO CHILD
  return (
    <div className={styles.chip}>
      <div className={styles.chip__label}>{label} </div>
      <div className={styles.chip__value}>{value}</div>
    </div>
  );
};

export default Chip;
