import { Todo } from "../../todo";
import { List } from "../../list";

export interface TodoList {
    lists: List[];
    todos: Todo[];
}
