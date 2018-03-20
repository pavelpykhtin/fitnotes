import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import "rxjs/add/operator/first";
import { IExcerciseParameter } from "./excercise-parameter";
import { IExcercise } from "../database/excercise";
import { TrainingService } from "../services/training.service";
import { TrainingRepository } from "../database/training-repository.service";
import { ParameterRepository } from "../database/parameters-repository.service";
import { TrainingPlanRepository } from "../database/training-plan-repository.service";

@Component({
  selector: "app-training-excercise",
  templateUrl: "./training-excercise.component.html",
  styleUrls: ["./training-excercise.component.less"]
})
export class TrainingExcerciseComponent implements OnInit {
  parameters: IExcerciseParameter[];
  excercise: IExcercise;
  form: FormGroup;
  routeData: Params;
  parametersMap: any;

  constructor(
    private route: ActivatedRoute,
    private trainingService: TrainingService,
    private trainingRepository: TrainingRepository,
    private parametersRepository: ParameterRepository,
    private trainingPlanRepository: TrainingPlanRepository
  ) {}

  async ngOnInit() {
    this.routeData = await this.route.params.first().toPromise();
    const training = await this.trainingRepository.get(
      this.routeData.trainingId
    );
    const plan = await this.trainingPlanRepository.get(training.planId);
    const parameters = await this.parametersRepository.list();

    const excercise = training.excercises[this.routeData.excerciseId];
    const excerciseTemplate = plan.excercises.filter(
      x => x.id == excercise.excerciseId
    )[0];
    this.parametersMap = parameters.reduce((seed, x) => {
      seed[x.id] = x;
      return seed;
    }, {});

    this.parameters = [
      <IExcerciseParameter>{
        name: this.parametersMap[excerciseTemplate.paramA].name,
        value: excercise.valueA,
        step: this.parametersMap[excerciseTemplate.paramA].step
      },
      <IExcerciseParameter>{
        name: this.parametersMap[excerciseTemplate.paramB].name,
        value: excercise.valueB,
        step: this.parametersMap[excerciseTemplate.paramB].step
      },
      <IExcerciseParameter>{
        name: this.parametersMap[excerciseTemplate.paramC].name,
        value: excercise.valueC,
        step: this.parametersMap[excerciseTemplate.paramC].step
      }
    ];
    this.excercise = <IExcercise>{
      name: excerciseTemplate.name
    };

    const group = this.parameters.reduce((seed, p, i) => {
      seed[`param-${i}`] = new FormControl(p.value, Validators.required);
      return seed;
    }, {});

    this.form = new FormGroup(group);
  }

  async done() {
    const trainingId = this.routeData.trainingId;
    const excerciseId = this.routeData.excerciseId;

    this.trainingService.completeExcercise(trainingId, +excerciseId);
  }

  dec(parameter: IExcerciseParameter) {
    parameter.value = parameter.value - parameter.step;
  }

  inc(parameter: IExcerciseParameter) {
    parameter.value = parameter.value + parameter.step;
  }
}
