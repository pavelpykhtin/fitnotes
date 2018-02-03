import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { ITraining } from './training';
import { ITrainingPlan } from './training-plan';

@Injectable()
export class DataSource extends Dexie {
    public trainings: Dexie.Table<ITraining, string>
    public trainingPlans: Dexie.Table<ITrainingPlan, string>

    constructor() {
        super("trainings");
        this.version(1).stores({
            trainings: '&id,timestamp',
            trainingPlans: '&id,timestamp'
        });
    }
}