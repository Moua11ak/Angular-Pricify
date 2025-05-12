import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightPriceFormComponent } from './flight-price-form.component';

describe('FlightPriceFormComponent', () => {
  let component: FlightPriceFormComponent;
  let fixture: ComponentFixture<FlightPriceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightPriceFormComponent]
    });
    fixture = TestBed.createComponent(FlightPriceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
