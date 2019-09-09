import { Action } from 'redux';
import { ToDoActions } from './app/app.actions';

export interface IAppState {
  //count: number;
}

export const INITIAL_STATE: IAppState = {
  //count: 0,
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch(action.type) {
    case ToDoActions.LOAD: return { 0 };
    case ToDoActions.DELETE: return { 0 };
  }


  return lastState;
}
