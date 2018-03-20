import { Injectable, Inject } from "@angular/core";
import { DataSource } from "./data-source";
import { ITraining } from "./training";

@Injectable()
export class TrainingRepository {
  constructor(private datasource: DataSource) {}

  async get(trainingId: string): Promise<ITraining> {
    return await this.datasource.trainings
      .filter(x => x.id == trainingId)
      .first();
  }

  put(training: ITraining): Promise<any> {
    return this.datasource.trainings.put(training);
  }

  getLastByPlan(planId: string): Promise<ITraining> {
    return this.datasource.trainings
      .orderBy("timestamp")
      .reverse()
      .filter(x => x.planId == planId)
      .first();
  }
}
