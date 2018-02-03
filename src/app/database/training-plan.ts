import { IExcercise } from './excercise';

export interface ITrainingPlan {
    id: string;
    name: string;
    timestamp: number;
    excercises: IExcercise[]
}