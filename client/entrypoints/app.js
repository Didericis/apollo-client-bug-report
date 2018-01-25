import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import client from 'lib/apollo_client'
import Main from 'components/main';

export default render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/:letter" component={Main}/>
        <Route exact path="/" component={Main}/>
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('app')
)
