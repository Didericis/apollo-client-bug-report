import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { useScroll } from 'react-router-scroll';
import { Router, Route, IndexRoute, applyRouterMiddleware, browserHistory } from 'react-router';

import client from 'lib/apollo_client'
import Main from 'components/main';

export default render(
  <ApolloProvider client={client}>
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
      <IndexRoute components={Main} />
      <Route path="/:letter" components={Main} />
    </Router>
  </ApolloProvider>,
  document.getElementById('app')
)
