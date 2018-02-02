import { Injectable, Inject } from '@angular/core';
import { DataSource } from './data-source';
import { ITraining } from './training';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ExcerciseRepositoryService {
  dataSource: DataSource;

  constructor(
    @Inject("DataSource")dataSource: DataSource) {
      this.dataSource = dataSource;
  }

  get(id: string): Promise<ITraining> {
    return this.dataSource.trainings.get(id);
  }

  put(entity: ITraining): Promise<any> {
    if(entity.id == null) {
      entity.id = uuid().toString();
    }

    return this.dataSource.trainings.put(entity);
  }
}
