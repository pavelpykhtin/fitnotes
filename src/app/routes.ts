import {Route} from '@angular/router';
import {TrainingPlanListComponent} from './training-plan-list/training-plan-list.component';
import {TrainingPlanEditorComponent} from './training-plan-editor/training-plan-editor.component';

const routes: Route[] = [
    <Route>{path: '', component: TrainingPlanListComponent},
    <Route>{path: 'training-plans/new', component: TrainingPlanEditorComponent}
];

export default routes;