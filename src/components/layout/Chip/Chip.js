import React from 'react';
import styles from './Chip.module.scss';

const Chip = ({ label, value }) => {
  // TODO MAKE A Chip COMPONENT AND STYLE + CONTEXT NOT PROPS TO CHILD
  return (
    <div className={styles.chip}>
      <span className={styles.chip__label}>{label} </span>
      <br /> <span className={styles.chip__value}>{value}</span>
    </div>
  );
};

export default Chip;
