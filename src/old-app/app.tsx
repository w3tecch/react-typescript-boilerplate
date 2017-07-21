import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import * as Logger from 'js-logger';

import { AppRoutes } from './app.routes';
import { Navbar } from './resources/templates/navbar';

export class App extends React.Component<any, any> {

  private logger: ILogger;

  constructor(
    props
  ) {
    super(props);
    this.logger = Logger.get('App');
    this.logger.debug('constructor');
  }

  public componentDidUpdate(): void {
    this.logger.debug('componentDidUpdate');
  }

  public render(): JSX.Element {
    return (
      <div>
        <Navbar routes={AppRoutes.routes} />
        <div className='page-host'>
          <AppRoutes />
        </div>
      </div>
    );
  }
}
