import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { Navbar } from './resources/templates/Navbar';
import { Welcome } from './modules/welcome/Welcome';
import { Users } from './modules/users/Users';
import { ChildRouter } from './modules/child-router/Child-router';

export class App extends React.Component<any, any> {
  private routes = [
    {
      name: 'Welcome',
      path: '/welcome',
      exact: false,
      component: Welcome
    },
    {
      name: 'Users',
      path: '/users',
      exact: false,
      component: Users
    },
    {
      name: 'Child Router',
      path: '/child-router',
      exact: false,
      component: ChildRouter
    }
  ];

  public render(): JSX.Element {
    return (
      <Router>
        <div>
          <Navbar routes={this.routes} />
          <div className="page-host">
            <Switch>
              <Route exact from="/" component={Welcome} />
              {this.routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
              <Route component={Welcome} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
