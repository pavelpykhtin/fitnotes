import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatSelectModule,
  MatCardModule } from '@angular/material';
import { } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment/moment.module';

import { routes } from './routes';
import { AppComponent } from './app.component';
import { ExcerciseComponent } from './excercise/excercise.component';
import { TrainingPlanListComponent } from './training-plan-list/training-plan-list.component';
import { TrainingPlanEditorComponent } from './training-plan-editor/training-plan-editor.component';
import { TrainingPlanRepository } from './database/training-plan-repository.service';
import { DataSource } from './database/data-source';
import { FormsModule } from '@angular/forms';
import { TrainingExcerciseComponent } from './training-excercise/training-excercise.component';
import { TrainingFactoryService } from './training-factory.service';
import { TrainingRepository } from './database/training-repository.service';
import { ExcerciseEditorComponent } from './excercise-editor/excercise-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    ExcerciseComponent,
    TrainingPlanListComponent,
    TrainingPlanEditorComponent,
    TrainingExcerciseComponent,
    ExcerciseEditorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    RouterModule.forRoot(routes, {enableTracing: false}),
    MomentModule
  ],
  providers: [
    DataSource,
    TrainingPlanRepository,
    TrainingRepository,
    TrainingFactoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
