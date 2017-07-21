import { LOAD_USERS_LOADING, LOAD_USERS_SUCCESS } from './../action.types';

import { initalState, IState } from './inital-state';

export function usersReducer(state = initalState.users, action): any {
  let newState;

  switch (action.type) {
    case LOAD_USERS_LOADING:
      return { ...state, isLoading: action.isLoading };

    case LOAD_USERS_SUCCESS:
      return { list: action.items, isLoading: false };

    default:
      return state;
  }
}
