import { Action } from "redux";


export enum ActionTypes {
  TOGGLE_SIDEBAR = '[general] TOGGLE_SIDEBAR'
}

export class ToggleSidebarAction implements Action {
  public readonly type = '[general] TOGGLE_SIDEBAR';
  constructor(public payload?: boolean) {}
}
// export class ResetCounterAction implements Action {
//   public type = ActionTypes.INCREASE_COUNTER;
//   constructor(public payload?: any) {}
// }

export type GeneralActions =
  ToggleSidebarAction;
