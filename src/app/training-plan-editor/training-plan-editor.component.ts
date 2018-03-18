import { Component, OnInit, Inject } from '@angular/core';
import { ITrainingPlan } from './training-plan';
import { Router } from '@angular/router';
import { IExcerciseParameter } from '../excercise-editor/excercise-parameter';
import { IExcercise } from './excercise';
import { IExcercise as IExcerciseModel } from '../database/excercise';
import { TrainingPlanRepository } from '../database/training-plan-repository.service';
import { ITrainingPlan as ITrainingPlanModel } from '../database/training-plan';
import { v4 as uuid } from 'uuid';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-training-plan-editor',
  templateUrl: './training-plan-editor.component.html',
  styleUrls: ['./training-plan-editor.component.less'],
  providers: [TrainingPlanRepository]
})
export class TrainingPlanEditorComponent implements OnInit {
  plan: ITrainingPlan;
  parameters: IExcerciseParameter[];
  form: FormGroup;
  excercises: FormArray;

  constructor(
    private router: Router,
    private planRepository: TrainingPlanRepository,
    private fb: FormBuilder
  ) {
    this.plan = <ITrainingPlan>{
      name: '',
      excercises: []
    };
    this.parameters = [
      <IExcerciseParameter>{id: '1', name: 'Подходы'},
      <IExcerciseParameter>{id: '2', name: 'Повторения'},
      <IExcerciseParameter>{id: '3', name: 'Дистанция'},
      <IExcerciseParameter>{id: '4', name: 'Длительность'},
      <IExcerciseParameter>{id: '5', name: 'Вес'},
    ];

    this.excercises = fb.array([]); 
    this.form = fb.group({
      name: '',
      excercises: this.excercises
    });
  }

  ngOnInit() {
  }

  add() {
    this.excercises.push(this.fb.group({
      id: uuid().toString(),
      name: '',
      paramA: '',
      paramB: '',
      paramC: ''
    }));
  }

  cancel() {
    this.router.navigate(['']);
  }

  save() {
    this.planRepository.put(this.buildModel(this.form.value))
      .then(() => this.router.navigate(['']));
  }

  private buildModel(value: any): ITrainingPlanModel {
    console.log(value);
    return <ITrainingPlanModel>{
      id: uuid().toString(),
      ...value,
      excercises: value.excercises.map(x => this.buildModelExcercise(x))
    };
  }

  private buildModelExcercise(pe: IExcercise): IExcerciseModel {
    return <IExcerciseModel>{
      id: uuid().toString(),
      ...pe,
      paramA: pe.paramA,
      paramB: pe.paramB,
      paramC: pe.paramC
    };
  }
}
