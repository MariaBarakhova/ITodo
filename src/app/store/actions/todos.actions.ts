import { Action } from '@ngrx/store';
import { todoActionTypes } from '../constans/iTodo.constants';
import { Todo } from 'src/app/todo';

export class Load implements Action {
    readonly type = todoActionTypes.LOAD;
    constructor ( public payload: Todo[]) {}
}
export type TodoActionUnion = Load;