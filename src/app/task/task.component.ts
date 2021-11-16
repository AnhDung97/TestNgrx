import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskInterface, TaskList } from './task.interface';
import * as fromTaskReducer from './task.reducer';
import * as taskAction from './task.action';
import { addTask } from './task.action';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, OnDestroy {

  unsubscribe$ = new Subject();
  taskList: TaskInterface[] = [];

  constructor(private readonly store: Store<{ task: { taskList: TaskInterface[] } }>) { }

  ngOnInit(): void {
    this.listenToStore();
  }

  listenToStore() {
    this.store.select('task').pipe(takeUntil(this.unsubscribe$)).subscribe((res: TaskList) => {
      this.taskList = res.taskList;
    })
  }

  addTask(event: EventTarget | null) {
    if (event) {
      const valueTyped = (<HTMLInputElement>event).value;
      const addItem = {
        name: valueTyped,
        status: false,
        date: new Date().toDateString()
      }
      this.store.dispatch(addTask({ addItem }));
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }

}
