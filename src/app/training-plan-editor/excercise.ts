import { IExcerciseParameter } from './excercise-parameter';

export interface IExcercise{
    name: string;
    paramA: IExcerciseParameter;
    paramB: IExcerciseParameter;
    paramC: IExcerciseParameter;
}