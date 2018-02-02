import { Component, OnInit, Inject } from '@angular/core';
import { ITrainingListItem } from './training-list-item';
import { Router } from '@angular/router';


@Component({
  selector: 'app-training-plan-list',
  templateUrl: './training-plan-list.component.html',
  styleUrls: ['./training-plan-list.component.less']
})
export class TrainingPlanListComponent implements OnInit {
  plans: ITrainingListItem[];

  constructor(
     private router: Router
  ) { 
    this.plans = [
      <ITrainingListItem>{id: 'plan-1', name: 'Понедельник'},
      <ITrainingListItem>{id: 'plan-2', name: 'Среда'},
      <ITrainingListItem>{id: 'plan-3', name: 'Четверг'}
    ];
  }

  ngOnInit() {
  }

  delete(plan: ITrainingListItem){

  }

  edit(plan: ITrainingListItem){
  }

  add(){
    this.router.navigate(['training-plans/new']);    
  }
}
