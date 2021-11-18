import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { TuiDialogModule, TuiModeModule, TuiNotificationsModule, TuiRootModule, TuiSvgModule, TuiThemeNightModule } from '@taiga-ui/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiToggleModule } from '@taiga-ui/kit';

export const TaigaUI = [
  TuiRootModule,
  TuiDialogModule,
  TuiNotificationsModule,
  TuiThemeNightModule,
  TuiModeModule,
  TuiToggleModule,
  FormsModule,
  ReactiveFormsModule,
  TuiSvgModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    ...TaigaUI
  ],
  exports: [
    ...TaigaUI
  ]
})
export class SharedModule { }
