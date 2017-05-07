import * as React from 'react';

import { ChildRouterRoutes } from './child-router.routes';

export class ChildRouter extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div>
        <h1>Child Router</h1>
        <ChildRouterRoutes />
      </div>
    );
  }
}
