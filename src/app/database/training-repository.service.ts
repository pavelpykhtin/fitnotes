import { Injectable, Inject } from '@angular/core';
import { DataSource } from './data-source';
import { ITraining } from './training';

@Injectable()
export class TrainingRepository {

  constructor(
    private datasource: DataSource) {

    }

    put(training: ITraining): Promise<any> {
      return this.datasource.trainings.put(training);
    }
}
