import { Component, OnInit, Inject } from '@angular/core';
import { ITrainingListItem } from './training-list-item';
import { Router } from '@angular/router';
import { ITrainingPlan as ITrainingPlanModel } from '../database/training-plan';
import { TrainingPlanRepository } from '../database/training-plan-repository.service';
import { TrainingFactoryService } from '../training-factory.service';
import { TrainingRepository } from '../database/training-repository.service';

@Component({
  selector: 'app-training-plan-list',
  templateUrl: './training-plan-list.component.html',
  styleUrls: ['./training-plan-list.component.less']
})
export class TrainingPlanListComponent implements OnInit {
  plans: ITrainingListItem[];

  constructor(
    private router: Router,
    private repository: TrainingPlanRepository,
    private trainingFactory: TrainingFactoryService,
    private trainingRepository: TrainingRepository,
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

  start(plan: ITrainingListItem) {
    this.trainingFactory.createTraining(plan.id)
      .then(training => {
        this.trainingRepository.put(training);
        return training;
      })
      .then(training => this.router.navigate(['training/excercise/:id', { id: training.id }]));
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

  private refresh() {
    this.repository.getAll()
      .then(plans => this.plans = plans.map(x => this.buildPe(x)));
  }
}
