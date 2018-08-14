import { Observable, of } from "rxjs/index";
import { mergeMap, catchError, map } from 'rxjs/operators';
import { combineEpics, ActionsObservable } from 'redux-observable';
import { Action } from 'redux';
import { IRootState } from "../root.reducer";
import * as GeneralActions from "./general.actions";


const exampleEffect = (action$: ActionsObservable<Action>, store: IRootState) =>
  action$.ofType(GeneralActions.ActionTypes.TOGGLE_SIDEBAR).pipe(
    mergeMap((action: GeneralActions.ToggleSidebarAction): Observable<any> => {
      // todo: any api call
      return of([1, 2, 3]).pipe(
        map(res => {
          return { type: GeneralActions.ActionTypes.EXAMPLE_ACTION, payload: res }
        }),
        catchError(err => {
          return of({ type: GeneralActions.ActionTypes.EXAMPLE_ACTION, payload: err });
        })
      )
    }),
  );

export const generalEffects = combineEpics(
  exampleEffect,
);
