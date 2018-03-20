import { Injectable, Inject } from "@angular/core";
import { ITrainingPlan } from "../database/training-plan";
import { ITraining } from "../database/training";
import { v4 as uuid } from "uuid";
import * as moment from "moment";
import { TrainingPlanRepository } from "../database/training-plan-repository.service";
import { IAttempt } from "../database/attempt";
import { TrainingRepository } from "../database/training-repository.service";

@Injectable()
export class TrainingFactoryService {
  constructor(
    private trainingPlanRepository: TrainingPlanRepository,
    private trainingRepository: TrainingRepository
  ) {}

  async createTraining(planId: string): Promise<ITraining> {
    const plan = await this.trainingPlanRepository.get(planId);
    const lastTraining = await this.trainingRepository.getLastByPlan(planId);
    const lastAttempts = lastTraining && lastTraining.excercises.reduce(
      (seed, x) => (seed[x.excerciseId] = x),
      {}
    ) || {};

    const trainingId = uuid().toString();
    const excercises = plan.excercises.map(
      x =>
        <IAttempt>{
          valueA: null,
          valueB: null,
          valueC: null,
          ...lastAttempts[x.id],
          excerciseId: x.id,
          completed: false
        }
    );

    return <ITraining>{
      id: trainingId,
      planId: planId,
      timestamp: +moment(),
      excercises: excercises
    };
  }
}
