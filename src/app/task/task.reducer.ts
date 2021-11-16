import { Action, createReducer, on, State } from "@ngrx/store";
import * as TaskAction from "./task.action";
import { TaskInterface, TaskList } from "./task.interface";

export const initState: TaskList = {
    taskList: [{
        name: 'To do 1',
        status: false,
        date: '16/11/2021'
    }]
}

const _taskReducer = createReducer(
    initState,
    on(TaskAction.addTask, (state, { addItem }) => {
        console.log('value', addItem);
        return {
            ...state,
            taskList: [...state.taskList, { ...addItem }]
        };
    }),
    on(TaskAction.updateTask, (state) => {
        return {
            ...state
        }
    }),
    on(TaskAction.removeTask, (state) => {
        return {
            ...state
        }
    })
);

export function taskReducerNew(state: any, action: Action) {
    return _taskReducer(state, action)
}

export function taskReducer(state = initState, action: TaskAction.TaskActionType): TaskList {
    switch (action.type) {
        case TaskAction.ADD_TASK:
            // console.log('add item', action.addItem);
            return {
                ...state
            };
        case TaskAction.EDIT_TASK:

            return {
                ...state
            }
        case TaskAction.REMOVE_TASK:

            return {
                ...state
            }
        default:
            return state;
    }
}