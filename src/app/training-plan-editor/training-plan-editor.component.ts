import { Component, OnInit } from '@angular/core';
import { ITrainingPlan } from './training-plan';
import { Router } from '@angular/router';
import { IExcerciseParameter } from './excercise-parameter';
import { IExcercise } from './excercise';

@Component({
  selector: 'app-training-plan-editor',
  templateUrl: './training-plan-editor.component.html',
  styleUrls: ['./training-plan-editor.component.less']
})
export class TrainingPlanEditorComponent implements OnInit {
  plan: ITrainingPlan;
  parameters: IExcerciseParameter[];

  constructor(
    private router: Router
  ) {
    this.plan = <ITrainingPlan>{
      name: '', 
      excercises: [
        <IExcercise>{name: 'Жим лежа'},
        <IExcercise>{name: 'Жим в наклоне'},
        <IExcercise>{name: 'Бег'},
    ]};
    this.parameters = [
      <IExcerciseParameter>{id: '1', name: 'Подходы'},
      <IExcerciseParameter>{id: '2', name: 'Повторения'},
      <IExcerciseParameter>{id: '3', name: 'Дистанция'},
      <IExcerciseParameter>{id: '4', name: 'Длительность'},
      <IExcerciseParameter>{id: '5', name: 'Вес'},
    ]
  }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['']);
  }

  save() {
    this.router.navigate(['']);
  }
}
