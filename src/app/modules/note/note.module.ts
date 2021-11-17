import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { NoteComponent } from './pages/note/note.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SingleNoteComponent } from './components/single-note/single-note.component';


@NgModule({
  declarations: [
    NoteComponent,
    SingleNoteComponent
  ],
  imports: [
    CommonModule,
    NoteRoutingModule,
    SharedModule
  ]
})
export class NoteModule { }
