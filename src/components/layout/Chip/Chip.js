import React from 'react';
import styles from './Chip.module.scss';

const Chip = ({ label, value }) => {
  // TODO MAKE A Chip COMPONENT AND STYLE + CONTEXT NOT PROPS TO CHILD
  return (
    <div className={styles.chip}>
      <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{label} </span>
      <br /> <span style={{ fontSize: '1.6rem' }}>{value}</span>
    </div>
  );
};

export default Chip;
