import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { usersReducer } from './users.reducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  routing: routerReducer
});
