import { User } from './../user';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserState {
  isMarkUserName: boolean;
  currentUser: User;
}

const initialState: UserState = {
  isMarkUserName: false,
  currentUser: null
};

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getIsMarkUserName = createSelector(
  getUserFeatureState,
  state => state.isMarkUserName
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export function reducer(state = initialState, action) {
  switch ( action.type ) {
    case 'MARK_USER_NAME':
      console.log('MARK_USER_NAME', action);
      return {
        ...state,
        isMarkUserName: action.isMarkUserName,
        currentUser: action.currentUser
      };
    default:
      return state;
  }
}
