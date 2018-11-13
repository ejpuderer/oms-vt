import { Action } from '@ngrx/store';

export const SET_MEMBER = '[Auth] Set Member';
export const SET_ADMIN = '[Auth] Set Admin';

export class SetMember implements Action {
  readonly type = SET_MEMBER;
}

export class SetAdmin implements Action {
  readonly type = SET_ADMIN;
}

export type RoleActions = SetMember | SetAdmin;
