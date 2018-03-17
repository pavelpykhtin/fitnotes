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

  async createTraining(planId: string): Promise<ITraining> {
    const plan = await this.trainingPlanRepository.get(planId)

    const trainingId = uuid().toString();
    const excercises = plan.excercises.map(x => <IAttempt>{
      id: uuid().toString(),
      trainingId: trainingId,
      excerciseId: x.id,
      valueA: null,
      valueB: null,
      valueC: null
    });

    return <ITraining>{
      id: trainingId,
      timestamp: +moment(),
      excercises: excercises
    };
  }
}
