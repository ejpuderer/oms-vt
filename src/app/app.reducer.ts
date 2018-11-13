import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUi from './shared/ui.reducer';
import * as fromAuth from './auth/auth.reducer';
import * as fromRole from './auth/role.reducer';

export interface State {
  ui: fromUi.State;
  auth: fromAuth.State;
  role: fromRole.State;
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUi.uiReducer,
  auth: fromAuth.authReducer,
  role: fromRole.roleReducer
};

export const getUiState = createFeatureSelector<fromUi.State>('ui');
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getIsAuth = createSelector(getAuthState, fromAuth.getIsAuth);

export const getRoleState = createFeatureSelector<fromRole.State>('role');
export const getIsAdmin = createSelector(getRoleState, fromRole.getIsAdmin);

