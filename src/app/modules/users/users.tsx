import * as React from 'react';

export class Users extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <section>
        <h2>Users</h2>
        <div className='row'>
          <div className='col-sm-6 col-md-3 card-container au-animate'>
            <div className='card'>
              <div className='avatar'>
                <img crossorigin ref='image' />
              </div>
              <div className='content'>
                <p className='name'>Name</p>
                <p><a target='_blank' className='btn btn-default' href='user.getHtmlUrl()'>Contact</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
