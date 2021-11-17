import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'note',
    pathMatch: 'full'
  },
  {
    path: 'note',
    loadChildren: () => import('./modules/note/note.module').then(m => m.NoteModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./modules/task/task.module').then(m => m.TaskModule)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
