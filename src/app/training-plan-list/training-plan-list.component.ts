import { Component, OnInit, Inject } from '@angular/core';
import { ITrainingListItem } from './training-list-item';
import { Router } from '@angular/router';
import {ITrainingPlan as ITrainingPlanModel} from '../database/training-plan';
import {TrainingPlanRepository} from '../database/training-plan-repository.service';

@Component({
  selector: 'app-training-plan-list',
  templateUrl: './training-plan-list.component.html',
  styleUrls: ['./training-plan-list.component.less'],
  providers: [TrainingPlanRepository]
})
export class TrainingPlanListComponent implements OnInit {
  plans: ITrainingListItem[];

  constructor(
     private router: Router,
     private repository: TrainingPlanRepository
  ) { 
    this.plans = [];
  }

  ngOnInit() {
    this.refresh();
  }

  delete(plan: ITrainingListItem) {
    this.repository.delete(plan.id)
      .then(() => this.refresh());
  }

  edit(plan: ITrainingListItem) {
  }

  add() {
    this.router.navigate(['training-plans/new']);    
  }

  private buildPe(model: ITrainingPlanModel): ITrainingListItem {
    return <ITrainingListItem>{
      id: model.id,
      name: model.name
    };
  }

  private refresh(){
    this.repository.getAll()
      .then(plans => this.plans = plans.map(x => this.buildPe(x)))
  }
}
