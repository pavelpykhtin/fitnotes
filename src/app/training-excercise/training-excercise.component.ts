import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import "rxjs/add/operator/first";
import { IExcerciseParameter } from "./excercise-parameter";
import { IExcercise } from "../database/excercise";
import { TrainingService } from "../training.service";

@Component({
  selector: "app-training-excercise",
  templateUrl: "./training-excercise.component.html",
  styleUrls: ["./training-excercise.component.less"]
})
export class TrainingExcerciseComponent implements OnInit {
  parameters: IExcerciseParameter[];
  excercise: IExcercise;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private trainingService: TrainingService
  ) {}

  ngOnInit() {
    this.parameters = [
      <IExcerciseParameter>{
        name: "param1",
        value: "3"
      },
      <IExcerciseParameter>{
        name: "param2",
        value: "10"
      },
      <IExcerciseParameter>{
        name: "param3",
        value: "10"
      }
    ];
    this.excercise = <IExcercise>{
      name: "excercise1"
    };

    const group = this.parameters.reduce((seed, p, i) => {
      seed[`param-${i}`] = new FormControl(p.value, Validators.required);
      return seed;
    }, {});
    

    this.form = new FormGroup(group);
  }

  async done() {
    const currentRouteData = await this.route.params.first().toPromise();

    const trainingId = currentRouteData.trainingId;
    const excerciseId = currentRouteData.excerciseId;

    this.trainingService.completeExcercise(trainingId, +excerciseId);
  }
}
