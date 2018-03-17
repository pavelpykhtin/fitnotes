import { Component, OnInit, Input } from "@angular/core";
import { IExcerciseParameter } from "./excercise-parameter";
import { IExcercise } from "../database/excercise";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-training-excercise",
  templateUrl: "./training-excercise.component.html",
  styleUrls: ["./training-excercise.component.less"]
})
export class TrainingExcerciseComponent implements OnInit {
  parameters: IExcerciseParameter[];
  excercise: IExcercise;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.router.routerState);

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
  }
}
