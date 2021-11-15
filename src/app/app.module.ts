import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { taskReducerNew } from './task/task.reducer';
import { taskReducer } from './task/task.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ task: taskReducerNew })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
