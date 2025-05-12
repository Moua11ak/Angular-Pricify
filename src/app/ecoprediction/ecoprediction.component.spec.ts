import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcopredictionComponent } from './ecoprediction.component';

describe('EcopredictionComponent', () => {
  let component: EcopredictionComponent;
  let fixture: ComponentFixture<EcopredictionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcopredictionComponent]
    });
    fixture = TestBed.createComponent(EcopredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
