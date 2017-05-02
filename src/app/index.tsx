import * as React from 'react';

import './../scss/main.scss';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import { App } from './App';
import { i18nInstance } from './utils/i18n';

ReactDOM.render(
  <I18nextProvider i18n={i18nInstance}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);
