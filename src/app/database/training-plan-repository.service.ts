import { Injectable, Inject } from '@angular/core';
import { ITrainingPlan } from './training-plan';
import { DataSource } from './data-source';

@Injectable()
export class TrainingPlanRepository {
    constructor(
        private dataSource: DataSource
    ) {

    }

    get(id: string): Promise<ITrainingPlan> {
        return this.dataSource.trainingPlans.get(id);
    }

    put(plan: ITrainingPlan): Promise<any> {
        return this.dataSource.trainingPlans.put(plan);
    }

    getAll(): Promise<ITrainingPlan[]> {
        return this.dataSource.trainingPlans.toArray();
    }

    delete(id: string): Promise<any> {
        return this.dataSource.trainingPlans.delete(id);
    }
}
