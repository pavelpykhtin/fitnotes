import { Injectable, Inject } from '@angular/core';
import { ITrainingPlan } from './database/training-plan';
import { ITraining } from './database/training';
import { v4 as uuid } from 'uuid';
import * as moment from 'moment';
import { TrainingPlanRepository } from './database/training-plan-repository.service';
import { IAttempt } from './database/attempt';

@Injectable()
export class TrainingFactoryService {

  constructor(
    private trainingPlanRepository: TrainingPlanRepository
  ) { }

  createTraining(planId: string): Promise<ITraining> {
    return this.trainingPlanRepository.get(planId)
      .then(plan => {
        return <ITraining>{
          id: uuid().toString(),
          timestamp: +moment(),
          excercises: plan.excercises.map(x => <IAttempt>{
            excerciseId: uuid().toString(),
            valueA: null,
            valueB: null,
            valueC: null
          })
        };
      });
  }
}
