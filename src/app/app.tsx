import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { AppRoutes } from './app.routes';
import { Navbar } from './resources/templates/navbar';

export class App extends React.Component<any, any> {

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
