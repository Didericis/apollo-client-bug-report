import React, { Component } from 'react';
import classNames from 'classnames';

import Person from 'components/person';
import styles from './person_list.css';

export default class PersonList extends Component {
  static defaultProps = {
    people: [],
  }

  render() {
    const { className, people } = this.props;
    return (
      <div className={classNames(styles.main, className)}>
        {people.map(person => <Person key={person.id} person={person} className={styles.person}/>)}
      </div>
    );
  }
}
