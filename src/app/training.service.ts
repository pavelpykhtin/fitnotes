import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class TrainingService {

  constructor(private router: Router) { }

  completeExcercise(trainingId: string, excerciseId: number){
    const nextExcerciseId = excerciseId + 1;

    this.router.navigate([
      "/training",
      trainingId,
      "excercise",
      nextExcerciseId
    ]);
  }
}
