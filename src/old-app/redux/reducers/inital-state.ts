import { UserModel } from './../../models/user.model';

export interface IState {
  users: {
    list: UserModel[];
    isLoading: boolean;
  };
}

export const initalState: IState = {
  users: {
    list: [],
    isLoading: true
  }
};
