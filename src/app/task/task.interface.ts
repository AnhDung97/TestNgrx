export interface TaskInterface {
    name: string;
    status: boolean;
    date: string;
}

export interface TaskList {
    taskList: TaskInterface[]
}