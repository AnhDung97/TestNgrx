import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskInterface } from './task.interface';
import * as fromTaskReducer from './task.reducer';
import * as taskAction from './task.action';
import { addTask } from './task.action';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(private readonly store: Store<{ task: { taskList: TaskInterface[] } }>) { }

  ngOnInit(): void {
    this.listenToStore();
  }

  listenToStore() {
    this.store.select('task').subscribe(res => {
      console.log(res);
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

}
