import { TodoList } from "../models/todolist.interface";
import { ListsActionUnion } from "../actions/lists.actions";
import { TodoActionUnion } from "../actions/todos.actions";
import { listActionTypes, todoActionTypes } from "../constans/iTodo.constants";


const initialState: TodoList = {
    lists: [],
    todos: []
}

export function iTodoReducer (state: TodoList = initialState, 
    action: ListsActionUnion | TodoActionUnion) {
        switch (action.type){
            case listActionTypes.LOAD:
            return {
                ...state,
                lists: action.payload,
        };
        case todoActionTypes.LOAD:
            return {
                ...state,
                todos: action.payload,
        };
        default: 
        return state;

}
}