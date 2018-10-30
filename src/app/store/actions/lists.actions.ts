
import { Action } from '@ngrx/store';
import { listActionTypes } from '../constans/iTodo.constants';
import { List } from 'src/app/list';

export class Load implements Action {
    readonly type = listActionTypes.LOAD;
    constructor ( public payload: List[]) {}
}

export type ListsActionUnion = Load;