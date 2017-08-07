import { Action } from '@ngrx/store';


export interface GlobalAppState {
    todos: TodoState
    persons: PersonState
}


export class TODO {
    title: string;
    description: string;
}

export class Person {
    name: string;
    email: string;


}

export interface TodoState {
    todoList: TODO[];
    selectedTodo: TODO;
}

interface PersonState {
    personList: Person[];
    selectedPerson: Person;
}

const todoInitialState: TodoState = { todoList: [], selectedTodo: null };
const personInitialState: PersonState = { personList: [], selectedPerson: null };

export class ADD_TODO_ACTION implements Action {
    readonly type = '[TODO]-ADD-TODO';
    constructor(public payload: TODO) { };

}

export class ADD_PERSON_ACTION implements Action {
    readonly type = '[PERSON]-ADD-PERSON';
    constructor(public payload: Person) { };
}

export type Todo_Actions = ADD_TODO_ACTION;
export type Person_Actions = ADD_PERSON_ACTION;

export function TodoReducer(state: TodoState = todoInitialState, action: Todo_Actions) {
    switch (action.type) {
        case '[TODO]-ADD-TODO':
            return {
                todoList: state.todoList.concat(action.payload),
                selectedTodo: null
            };

        default:
            return state;

    }
}

export function PersonReducer(state: PersonState = personInitialState, action: Person_Actions) {
    switch (action.type) {
        case '[PERSON]-ADD-PERSON':
            return {
                personList: state.personList.concat(action.payload),
                selectedPerson: null
            };

        default:
            return state;

    }
}


export const reducers = {
    todos: TodoReducer,
    persons: PersonReducer
}