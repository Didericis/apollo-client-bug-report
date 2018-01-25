import { compose, withProps } from 'recompose';
import { withRouter } from 'react-router';

import Filter from 'components/filter';

export default compose(
  withRouter,
  withProps(({ router }) => ({
    onClickA: () => router.push('/a'),
    onClickB: () => router.push('/b'),
    onClickC: () => router.push('/c'),
  })),
)(Filter);
