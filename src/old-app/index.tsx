/**
 * Import styles
 */
import './../scss/main.scss';

/**
 * Import config
 */
import { appConfigService } from './services/app-config.service';

/**
 * Import logger
 */
import * as Logger from 'js-logger';
Logger.useDefaults();
Logger.setLevel(Logger[appConfigService.getConfig().LOG_LEVEL]);

/**
 * Import react libraries
 */
import * as React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { Provider } from 'react-redux';

/**
 * Import locals
 */
import { App } from './app';
import { i18nInstance } from './utils/i18n';
import configureStore from './redux/configure.store';

/**
 * Configure redux
 */
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <I18nextProvider i18n={i18nInstance}>
        <App />
      </I18nextProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
