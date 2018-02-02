import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlanEditorComponent } from './training-plan-editor.component';

describe('TrainingPlanEditorComponent', () => {
  let component: TrainingPlanEditorComponent;
  let fixture: ComponentFixture<TrainingPlanEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingPlanEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPlanEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
