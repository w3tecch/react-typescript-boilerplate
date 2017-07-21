import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { translate } from 'react-i18next';

export const Navbar = translate()(({ routes, t }) => (
  <nav className='navbar navbar-default navbar-fixed-top' role='navigation'>
    <div className='navbar-header'>
      <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#skeleton-navigation-navbar-collapse'>
        <span className='sr-only'>Toggle Navigation</span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
      </button>
      <a className='navbar-brand' href='#'>
        <i className='fa fa-home'></i>
        <span>{t('TITLE')}</span>
      </a>
    </div>

    <div className='collapse navbar-collapse' id='skeleton-navigation-navbar-collapse'>
      <ul className='nav navbar-nav'>
        {routes.map((route, index) => (
          <li key={index}>
            <NavLink to={route.path} activeClassName='active'>{route.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
));
