import { Action, createAction, props } from "@ngrx/store";
import { TaskInterface } from "./task.interface";

// New way.

export const addTask = createAction('[Task Component] Add Task', props<{ addItem: TaskInterface; }>());
export const removeTask = createAction('[Task Component] Remove Task');
export const updateTask = createAction('[Task Component] Update Task');
export const login = createAction(
    '[Login Page] Login',
    props<{ username: string; password: string }>()
);

// Old way

export const EDIT_TASK = '[Task Component] Edit Task';
export const REMOVE_TASK = 'Task Component] Remove Task';
export const ADD_TASK = '[Task Component] Add Task';

export class EditTask implements Action {
    readonly type = EDIT_TASK;
    constructor(public editItem: any) { }
}

export class RemoveTask implements Action {
    readonly type = REMOVE_TASK;
    constructor(public removeItem: any) { }
}

export class AddTaskV2 implements Action {
    readonly type = ADD_TASK;
    constructor(public addItem: TaskInterface) { };
}

export type TaskActionType = EditTask | RemoveTask | AddTaskV2;