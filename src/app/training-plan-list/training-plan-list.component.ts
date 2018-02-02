import { Component, OnInit } from '@angular/core';
import { ITrainingListItem } from './training-list-item';


@Component({
  selector: 'app-training-plan-list',
  templateUrl: './training-plan-list.component.html',
  styleUrls: ['./training-plan-list.component.less']
})
export class TrainingPlanListComponent implements OnInit {
  plans: ITrainingListItem[];

  constructor() { 
    this.plans = [
      <ITrainingListItem>{id: 'plan-1', name: 'Понедельник'},
      <ITrainingListItem>{id: 'plan-2', name: 'Среда'},
      <ITrainingListItem>{id: 'plan-3', name: 'Четверг'}
    ];
  }

  ngOnInit() {
  }

}
