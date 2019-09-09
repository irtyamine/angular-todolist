import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class ToDoActions {
  static LOAD = 'LOAD';
  static DELETE = 'DELETE';
  static ADD = 'ADD';
  static TOGGLE = 'TOGGLE';

  load(): Action {
    return { type: ToDoActions.LOAD };
  }

  delete(): Action {
    return { type: ToDoActions.DELETE };
  }
  add(): Action {
    return { type: ToDoActions.ADD };
  }
  toggle(): Action {
    return { type: ToDoActions.TOGGLE };
  }
}
