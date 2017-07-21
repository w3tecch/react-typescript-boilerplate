import axios from 'axios';

import { UserModel } from './../../models/user.model';
import { LOAD_USERS_LOADING, LOAD_USERS_SUCCESS } from './../action.types';

export function LoadUsersIsLoading(bool): any {
    return {
        type: LOAD_USERS_LOADING,
        isLoading: bool
    };
}

export function loadUsersSuccess(items: UserModel[]): any {
    return {
        type: LOAD_USERS_SUCCESS,
        items
    };
}

export function loadUsersFetch(): any {
    return (dispatch) => {
        dispatch(LoadUsersIsLoading(true));

        axios.get('https://api.github.com/users')
          .then(response => {
            const users = response.data.map(user => new UserModel(user.avatar_url, user.login, user.html_url));
            return dispatch(loadUsersSuccess(users));
          });
    };
}
