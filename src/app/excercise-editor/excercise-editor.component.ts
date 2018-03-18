import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IExcerciseParameter } from './excercise-parameter';
import { v4 as uuid } from 'uuid';
import { IExcercise } from './excercise';

@Component({
  selector: 'excercise-editor',
  templateUrl: './excercise-editor.component.html',
  styleUrls: ['./excercise-editor.component.less']
})
export class ExcerciseEditorComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() parameters: IExcerciseParameter;
  excercise: IExcercise;

  constructor() { }

  ngOnInit() {
    this.excercise = <IExcercise>{
      id: uuid().toString()
    };
  }
}
