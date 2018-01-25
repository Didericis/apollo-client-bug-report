import { compose, withProps } from 'recompose';
import { withRouter } from 'react-router-dom';

import Filter from 'components/filter';

export default compose(
  withRouter,
  withProps(({ history }) => ({
    onClickA: () => history.push('/a'),
    onClickB: () => history.push('/b'),
    onClickC: () => history.push('/c'),
  })),
)(Filter);
