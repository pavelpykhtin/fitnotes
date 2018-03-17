import {Route} from '@angular/router';
import {TrainingPlanListComponent} from './training-plan-list/training-plan-list.component';
import {TrainingPlanEditorComponent} from './training-plan-editor/training-plan-editor.component';
import {TrainingExcerciseComponent} from './training-excercise/training-excercise.component';

export const routes: Route[] = [
    <Route>{path: '', component: TrainingPlanListComponent},
    <Route>{path: 'training-plans/new', component: TrainingPlanEditorComponent},
    <Route>{path: 'training-plans/:id', component: TrainingPlanEditorComponent},
    <Route>{path: 'training/:trainingId/excercise/:excerciseId', component: TrainingExcerciseComponent}
];