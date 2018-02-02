import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { ITraining } from './training';

@Injectable()
export class DataSource extends Dexie {
    public trainings: Dexie.Table<ITraining, string>

    constructor(){
        super("trainings");
        this.version(1).stores({
            trainings: '&id,timestamp'
        });
    }
}