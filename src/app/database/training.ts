import { IAttempt } from "./attempt";

export interface ITraining {
    id: string;
    timestamp: number;
    planId: string;
    excercises: IAttempt[];
}
