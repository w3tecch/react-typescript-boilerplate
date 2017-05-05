import * as React from 'react';

import './../scss/main.scss';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import { App } from './app';
import { i18nInstance } from './utils/i18n';

ReactDOM.render(
  <Router>
    <I18nextProvider i18n={i18nInstance}>
      <App />
    </I18nextProvider>
  </Router>,
  document.getElementById('root')
);
