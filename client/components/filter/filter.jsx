import React from 'react';

import styles from './filter.css';

export default ({ onClickA, onClickB, onClickC }) => (
  <div className={styles.main}>
    <button onClick={onClickA}>A</button>
    <button onClick={onClickB}>B</button>
    <button onClick={onClickC}>C</button>
  </div>
);
