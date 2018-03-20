import { Injectable, Inject } from "@angular/core";
import { DataSource } from "./data-source";
import { IParameter } from "./parameter";

@Injectable()
export class ParameterRepository {
  parameters: IParameter[];

  constructor() {
    this.parameters = [
      <IParameter>{ id: "attempts", name: "Подходы", step: 1 },
      <IParameter>{ id: "repeats", name: "Повторения", step: 1 },
      <IParameter>{ id: "distance", name: "Дистанция", step: 1 },
      <IParameter>{ id: "duration", name: "Длительность", step: 1 },
      <IParameter>{ id: "weight", name: "Вес", step: 0.25 }
    ];
  }

  list(): Promise<Array<IParameter>>{
    return Promise.resolve(this.parameters.splice(0));
  }
}
