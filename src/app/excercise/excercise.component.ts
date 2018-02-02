import { Component, OnInit, Input } from '@angular/core';
import { ExcerciseMetadata } from '../excercise-metadata';

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrls: ['./excercise.component.less']
})
export class ExcerciseComponent implements OnInit {

  @Input()
  excercizeMetadata: ExcerciseMetadata;

  name: string;
  paramAName: string;
  paramBName: string;
  paramCName: string;

  constructor() {
    this.excercizeMetadata = <ExcerciseMetadata>{
      paramAName: 'Подходов',
      paramBName: 'Повторений',
      paramCName: 'Вес'
    }

    this.name = this.excercizeMetadata.name;
    this.paramAName = this.excercizeMetadata.paramAName;
    this.paramBName = this.excercizeMetadata.paramBName;
    this.paramCName = this.excercizeMetadata.paramCName;
   }

  ngOnInit() {
  }
}

