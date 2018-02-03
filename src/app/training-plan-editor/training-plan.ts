import { IExcercise } from './excercise'; 

export interface ITrainingPlan {
    name: string;
    excercises: IExcercise[]
};