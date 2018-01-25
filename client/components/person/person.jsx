import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PersonList from 'components/person_list';
import styles from './person.css';

export default class Person extends Component {
  static defaultProps = {
    person: {}
  }

  static propTypes = {
    className: PropTypes.string,
    person: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  }

  render() {
    const { className, selected, person } = this.props;
    console.log(person);

    return (
      <div className={classNames(styles.main, className)}>
        <div className={classNames(styles.person, { [styles.selected]: selected })}>
          <h1>{person.name}</h1>
        </div>
      </div>
    );
  }
}
