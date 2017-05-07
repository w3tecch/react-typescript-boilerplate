import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { ChildRouterRoutes } from './child-router.routes';

export class ChildRouter extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div>
        <h1>Child Router</h1>
        <section>
          <div>
            <div className='col-md-2'>
              <h2>Links</h2>
              <ul className='well nav nav-pills nav-stacked'>
                {ChildRouterRoutes.routes.map((route, index) => (
                  <li key={ index }>
                    <NavLink to={route.path} activeClassName='active'>{route.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className='col-md-10'>
              <ChildRouterRoutes />
            </div>
          </div>
        </section >
      </div >
    );
  }
}
