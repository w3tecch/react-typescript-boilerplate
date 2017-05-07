import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Welcome } from './../welcome/welcome';
import { Users } from './../users/users';
import { ChildRouter } from './child-router';

export interface IRouterRoute {
  name: string;
  title?: string;
  path: string;
  exact?: boolean;
  component: typeof React.Component;
}

export class ChildRouterRoutes extends React.Component<any, any> {

  public static routes: IRouterRoute[] = [
    {
      name: 'welcome',
      title: 'Welcome',
      path: '/child-router/welcome',
      exact: false,
      component: Welcome
    },
    {
      name: 'users',
      title: 'Users',
      path: '/child-router/users',
      exact: false,
      component: Users
    },
    {
      name: 'child-router',
      title: 'Child Router',
      path: '/child-router/child-router',
      exact: false,
      component: ChildRouter
    }
  ];

  public render(): JSX.Element {
    return (
      <Switch>
        {ChildRouterRoutes.routes.map((route, index) => (
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
