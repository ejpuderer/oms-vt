import { RoleActions, SET_MEMBER, SET_ADMIN } from './role.actions';

export interface State {
  isAdmin: boolean;
}

const initialState: State = {
  isAdmin: false
};

export function roleReducer(state = initialState, action: RoleActions) {
  switch (action.type) {
    case SET_MEMBER:
      return {
        isAdmin: false
      } 
    case SET_ADMIN:
      return {
        isAdmin: true
      } 
    default: {
      return state;
    }
  }
}

export const getIsAdmin = (state: State) => state.isAdmin;
