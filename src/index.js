import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configureStore from './store';
import { Provider } from 'react-redux';

import { App } from './components/App';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
