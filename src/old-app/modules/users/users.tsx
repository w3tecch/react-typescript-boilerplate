import * as React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';

import { loadUsersFetch } from './../../redux/actions/users.action';

const mapStateToProps = (state) => {
  return {
    users: state.users.list,
    isLoading: state.users.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(loadUsersFetch())
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export class Users extends React.Component<any, any> {

  public static propTypes = {
    users: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
  };

  public componentDidMount(): void {
    this.props.fetchUser();
  }

  public render(): JSX.Element {
    return (
      <section>
        <h2>Users</h2>
        <div className='row'>
          {this.props.users.isLoading &&
            <li className='loader'>
              <i className='fa fa-spinner fa-spin fa-2x'></i>
            </li>
          }
          {this.props.users.map((user, index) => (
            <div key={index} className='col-sm-6 col-md-3 card-container au-animate'>
              <div className='card'>
                <div className='avatar'>
                  <img src={user.avatarUrl} />
                </div>
                <div className='content'>
                  <p className='name'>{user.login}</p>
                  <p><a target='_blank' className='btn btn-default' href={user.htmlUrl}>Contact</a></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
