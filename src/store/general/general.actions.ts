import { Action } from "redux";


export enum ActionTypes {
  TOGGLE_SIDEBAR = '[general] TOGGLE_SIDEBAR',
  EXAMPLE_ACTION = '[general] EXAMPLE_ACTION'
}

export class ToggleSidebarAction implements Action {
  public readonly type = ActionTypes.TOGGLE_SIDEBAR;
  constructor(public payload?: boolean) {}
}
export class ExampleAction implements Action {
  public type = ActionTypes.EXAMPLE_ACTION;
  constructor(public payload?: any) {}
}

export type GeneralActions =
  ToggleSidebarAction
  | ExampleAction;
