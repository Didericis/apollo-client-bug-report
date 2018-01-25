import React from 'react';

import PersonList from 'containers/person_list';
import Filter from 'containers/filter';
import styles from './main.css';

export default () => (
  <div className={styles.main}>
    <PersonList className={styles.tasks}/>
    <Filter />
  </div>
)
