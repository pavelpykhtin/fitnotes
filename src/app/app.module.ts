import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatListModule, MatMenuModule, MatIconModule } from '@angular/material';
import { } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

import routes from './routes';
import { AppComponent } from './app.component';
import { ExcerciseComponent } from './excercise/excercise.component';
import { TrainingPlanListComponent } from './training-plan-list/training-plan-list.component';
import { TrainingPlanEditorComponent } from './training-plan-editor/training-plan-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    ExcerciseComponent,
    TrainingPlanListComponent,
    TrainingPlanEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
