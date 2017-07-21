import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Welcome } from './modules/welcome/welcome';
import { Users } from './modules/users/users';
import { ChildRouter } from './modules/child-router/child-router';

export interface IRouterRoute {
  name: string;
  title?: string;
  path: string;
  exact?: boolean;
  component: typeof React.Component;
}

export class AppRoutes extends React.Component<any, any> {

  public static routes: IRouterRoute[] = [
    {
      name: 'welcome',
      title: 'Welcome',
      path: '/welcome',
      exact: false,
      component: Welcome
    },
    {
      name: 'users',
      title: 'Users',
      path: '/users',
      exact: false,
      component: Users
    },
    {
      name: 'child-router',
      title: 'Child Router',
      path: '/child-router',
      exact: false,
      component: ChildRouter
    }
  ];

  public render(): JSX.Element {
    return (
      <Switch>
        {AppRoutes.routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        <Route component={Welcome} />
      </Switch>
    );
  }
}
